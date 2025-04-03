import { watch } from "fs";
import { spawn, type ServerWebSocket } from "bun";

let clients: Set<ServerWebSocket<unknown>> = new Set();

async function build() {
  console.log("🔨 빌드 중...");
  const buildProcess = spawn(["bun", "run", "scripts/build.tsx"]);

  const text = await new Response(buildProcess.stdout).text();
  console.log(text);

  const error = await new Response(buildProcess.stderr).text();
  if (error) console.error(error);

  console.log("✔ 빌드 완료");
  clients.forEach((ws) => {
    if (ws.readyState === 1) {
      ws.send("reload");
    }
  });
}

function startWatcher() {
  const watchDirs = ["pages", "lib", "components", "public"];

  console.log("👀 파일 변경 감시 중...");
  watchDirs.forEach((dir) => {
    watch(dir, { recursive: true }, async (_event, filename) => {
      console.log(`📦 변경 감지됨: ${filename}`);
      await build();
    });
  });
}

function injectHMR(html: string): string {
  return html.replace(
    /<\/body>/,
    `
<script>
const ws = new WebSocket('ws://' + location.host + '/hmr');
ws.onmessage = (msg) => {
  if (msg.data === 'reload') location.reload();
};
</script>
</body>`
  );
}

function startServer() {
  const port = 3000;
  console.log(`🚀 서버 실행 중: http://localhost:${port}`);

  Bun.serve({
    port,
    websocket: {
      message(ws, message) {},
      open(ws) {
        clients.add(ws);
      },
      close(ws) {
        clients.delete(ws);
      },
    },
    fetch(req, server) {
      const url = new URL(req.url);

      // WebSocket 업그레이드 처리
      if (server.upgrade(req)) return;

      let filePath = `dist${url.pathname}`;
      if (filePath.endsWith("/")) filePath += "index.html";

      try {
        const file = Bun.file(filePath);

        if (filePath.endsWith(".html")) {
          return file.text().then((text) => {
            const injected = injectHMR(text);
            return new Response(injected, {
              headers: { "Content-Type": "text/html" },
            });
          });
        }

        return new Response(file);
      } catch {
        return new Response("Not Found", { status: 404 });
      }
    },
  });
}

await build();       // 처음 시작 시 빌드
startWatcher();      // 변경 감시
startServer();       // 서버 실행

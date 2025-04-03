import { hydrate } from "preact";

const Page = (await import(__ENTRY__)).default;
hydrate(<Page />, document.getElementById("app")!);
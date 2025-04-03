import { useComputed, useSignal } from "@preact/signals";

export default () => {
    const count = useSignal(0);
    const doubleCount = useComputed(() => 2*count.value);

    return <div>
        <h1>Index!</h1>
        <button onClick={() => {++count.value;}}>Up</button>
        <p>{count} {doubleCount}</p>
    </div>
}

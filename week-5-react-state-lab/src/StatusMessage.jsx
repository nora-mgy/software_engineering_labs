export default function StatusMessage({ on }) {
    return <p>Status: {on ? "System Active" : "System Idle"}</p>
}
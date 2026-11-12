import { useState } from "react";
import StatusMessage from "./StatusMessage";

export default function LightSwitch() {
    const [on, setOn] = useState(false);

    return(
        <div>
            <h3>The light is {on ? "ON" : "OFF"}</h3>
            <button onClick={() => setOn(!on)}>Toggle</button>
            <StatusMessage on={on} />
        </div>
    );
}
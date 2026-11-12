import { useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Current Count: {count}</h2>
            <button onClick={() => {
                if (count < 10) {
                    setCount(count +1);
                }
            }}
            >
                Add 1
            </button>

            <button onClick={() => setCount(count -1)}>
                Take 1 Away
            </button>

            <button onClick={() => setCount(count *2)}>
                Double
            </button>

            <button onClick={() => setCount(count /2)}>
                Half
            </button>

            <button onClick={() => setCount(0)}>
                Reset
            </button>

            {count >= 10 && <p>Limit reached!</p>}
        </div>
    );
}

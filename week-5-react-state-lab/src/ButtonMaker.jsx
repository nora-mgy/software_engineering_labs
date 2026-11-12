import { useState } from "react";

export default function ButtonMaker() {
  const [buttonCount, setButtonCount] = useState(0);

  return (
    <div>
      <button onClick={() => setButtonCount(buttonCount + 1)}>
        Create Button
      </button>

      <button onClick={() => setButtonCount(buttonCount + 2)}>
        Create TWO Buttons
      </button>

      <button onClick={() => setButtonCount(buttonCount + 1000)}>
        Create A THOUSAND Buttons
      </button>

      {Array.from({ length: buttonCount }).map((_, index) => (
        <button key={index}>
          New Button
        </button>
      ))}
    </div>
  );
}
import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Live Text Preview</h2>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3>Preview:</h3>
      <p>{text}</p>
    </div>
  );
}

export default TextInput;
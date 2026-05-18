import React, { useState } from "react";

function ToggleDay37() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.3s",
      }}
    >
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleTheme}
        />
        Toggle Theme
      </label>
    </div>
  );
}

export default ToggleDay37;
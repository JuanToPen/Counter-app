import { useState } from "react";

function App() {
  return (
    <div id="body">
      <div id="options">
        <p id="refresh">↻</p>
        <p id="settings">⚙</p>
      </div>
      <div id="content">
        <p id="decrement">-</p>
        <div id="display">0</div>
        <p id="increment">+</p>
      </div>
    </div>
  );
}

export default App;

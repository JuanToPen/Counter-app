import { useState } from "react";
import reload from "./imgs/reload.png";
import reloadWhite from "./imgs/reloadWhite.png";
import settings from "./imgs/settingsBlack.png";
import settingsWhite from "./imgs/settingsWhite.png";

function App() {
  let [count, setCount] = useState(0);
  let [isVisible, setIsVisible] = useState(false);

  function increment() {
    setCount((count += 1));
  }

  function decrement() {
    setCount((count -= 1));
  }

  return (
    <div id="body">
      <div id="options">
        <img
          id="refresh"
          src={reload}
          onClick={() => {
            setCount(0);
          }}
        />
        <img
          src={settings}
          id="settings"
          onClick={() => {
            setIsVisible(true);
          }}
        />
      </div>
      <div id="content">
        <button id="decrement" onClick={decrement}>
          -
        </button>
        <p
          id={
            count > 99999 || count < -99999
              ? "sixDigits"
              : count > 9999 || count < -9999
              ? "fiveDigits"
              : count > 999 || count < -999
              ? "fourDigits"
              : count > 99 || count < -99
              ? "threeDigits"
              : count > 9 || count < -9
              ? "twoDigits"
              : "oneDigit"
          }
        >
          {count}
        </p>
        <button id="increment" onClick={increment}>
          +
        </button>
      </div>
      <div id="lowBar">
        <button onClick={decrement} id="lowBarDecrement">
          -
        </button>
        <button onClick={increment} id="lowBarIncrement">
          +
        </button>
      </div>
      {isVisible && (
        <div id="settingsModal">
          <div id="settingsContent">
            <button
              onClick={() => {
                setIsVisible(false);
              }}
            >
              ✕
            </button>
            <p>
              SET COUNT:
              <input
                type="number"
                id="setCount"
                onChange={(e) => {
                  if (
                    parseInt(e.target.value) > 0 &&
                    e.target.value.length <= 6
                  ) {
                    setCount(parseInt(e.target.value));
                  } else if (
                    parseInt(e.target.value) < 0 &&
                    e.target.value.length <= 7
                  ) {
                    setCount(parseInt(e.target.value));
                  }
                }}
              />
            </p>
            <div id="colors">
              <div
                id="red"
                className="color"
                onClick={() => {
                  document.documentElement.style.setProperty(
                    "--background-color",
                    "#c40a0a"
                  );
                }}
              ></div>
              <div
                id="blue"
                className="color"
                onClick={() => {
                  document.documentElement.style.setProperty(
                    "--background-color",
                    "#0d58d9"
                  );
                }}
              ></div>
              <div
                id="green"
                className="color"
                onClick={() => {
                  document.documentElement.style.setProperty(
                    "--background-color",
                    "#1cd660"
                  );
                }}
              ></div>
              <div
                id="purple"
                className="color"
                onClick={() => {
                  document.documentElement.style.setProperty(
                    "--background-color",
                    "#6b0cf0"
                  );
                }}
              ></div>
              <div id="colorful" className="color"></div>
              <div id="white" className="color"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

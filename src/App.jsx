import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [isModalVisible, setIsModalVisible] = useState(false);

  function toWhite() {
    document.documentElement.style.setProperty("--digit-color", "white");
    document.documentElement.style.setProperty(
      "--border-color",
      "rgb(168, 168, 168)"
    );
    document.documentElement.style.setProperty("--hover-color", "white");
  }

  function toBlack() {
    document.documentElement.style.setProperty("--digit-color", "black");
    document.documentElement.style.setProperty("--border-color", "black");
    document.documentElement.style.setProperty(
      "--hover-color",
      "rgb(92, 92, 92)"
    );
  }

  return (
    <div id="body">
      <div id="options">
        <button
          id="refresh"
          onClick={() => {
            setCount(0);
          }}
        >
          ⟳
        </button>
        <button
          id="settings"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          ⚙︎
        </button>
      </div>
      <div id="content">
        <button
          id="decrement"
          onClick={() => {
            setCount((count -= 1));
          }}
        >
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
        <button
          id="increment"
          onClick={() => {
            setCount((count += 1));
          }}
        >
          +
        </button>
      </div>
      <div id="lowBar">
        <button
          onClick={() => {
            setCount((count -= 1));
          }}
          id="lowBarDecrement"
        >
          -
        </button>
        <button
          onClick={() => {
            setCount((count += 1));
          }}
          id="lowBarIncrement"
        >
          +
        </button>
      </div>
      {isModalVisible && (
        <div id="settingsModal">
          <div id="settingsContent">
            <button
              onClick={() => {
                setIsModalVisible(false);
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
                  toWhite();
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
                  toWhite();
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
                  toBlack();
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
                  toWhite();
                }}
              ></div>
              <div
                id="colorful"
                className="color"
                onClick={() => {
                  document.documentElement.style.setProperty(
                    "--background-color",
                    "linear-gradient(to bottom,#f01f0c,#f0bb0c,#d9f00c,#41f00c,#0c32f0,#a80cf0,red)"
                  );
                  toBlack();
                }}
              ></div>
              <div
                id="white"
                className="color"
                onClick={() => {
                  document.documentElement.style.setProperty(
                    "--background-color",
                    "white"
                  );
                  toBlack();
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

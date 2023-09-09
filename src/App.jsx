import { useState } from "react";
import minus from "./imgs/minus.png";
import plus from "./imgs/plus.png";
import reload from "./imgs/reload.png";
import settings from "./imgs/settings.png";

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
          id="settings"
          src={settings}
          onClick={() => {
            setIsVisible(true);
          }}
        />
      </div>
      <div id="content">
        <img id="decrement" src={minus} onClick={decrement} />
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
        <img id="increment" src={plus} onClick={increment} />
      </div>
      <div id="lowBar">
        <img src={minus} onClick={decrement} id="lowBarDecrement" />
        <img src={plus} onClick={increment} id="lowBarIncrement" />
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
              <div id="red" className="color"></div>
              <div id="blue" className="color"></div>
              <div id="green" className="color"></div>
              <div id="yellow" className="color"></div>
              <div id="orange" className="color"></div>
              <div id="purple" className="color"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

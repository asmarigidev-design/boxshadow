import React, { useState } from 'react';

function App() {
  // موقعیت افقی سایه / Horizontal shadow position
  const [hori, setHori] = useState(10);
  // موقعیت عمودی سایه / Vertical shadow position
  const [veri, setVeri] = useState(10);
  // میزان تاری سایه / Shadow blur amount
  const [blur, setBlur] = useState(10);
  // گستردگی سایه / Shadow spread radius
  const [spread, setSpread] = useState(10);
  // رنگ سایه / Shadow color
  const [color, setColor] = useState("black");

  return (
    <div className="app">
      <div className="control">
        <div className="form-gtup">
          <label>ofogh</label>
          <input
            type="range"
            min="-200"
            max="200"
            className="form-range"
            value={hori}
            onChange={(e) => setHori(e.target.value)}
          />
        </div>
        <div className="form-gtup">
          <label>ammoud</label>
          <input
            type="range"
            min="-200"
            max="200"
            className="form-range"
            value={veri}
            onChange={(e) => setVeri(e.target.value)}
          />
        </div>
        <div className="form-gtup">
          <label>taridid</label>
          <input
            type="range"
            min="0"
            max="200"
            className="form-range"
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
          />
        </div>
        <div className="form-gtup">
          <label>gostaresh rang</label>
          <input
            type="range"
            min="-100"
            max="50"
            className="form-range"
            value={spread}
            onChange={(e) => setSpread(e.target.value)}
          />
        </div>
        <div className="form-gtup">
          <label>color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
      <div className="outpot">
        {/* اعمال سایه به عنصر / Apply shadow to element */}
        <div
          className="box"
          style={{
            boxShadow: `${hori}px ${veri}px ${blur}px ${spread}px ${color}`,
          }}
        >
          <p>
            box-shadow: {hori}px {veri}px {blur}px {spread}px {color}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

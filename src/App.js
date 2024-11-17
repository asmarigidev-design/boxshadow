import React,{useState} from 'react';

//import Appp from './Appp.js';


function App() {

	const[hori, setHori] = useState(10);
	const[veri, setVeri] = useState(10);
	const[blur, setBlur] = useState(10);
	const[spread, setSpread] = useState(10);
	const[color, setColor] = useState("black");
	console.log(spread)
  return (
   <div className="app">
   <div className="control">
   <div className="form-gtup">

<label>ofogh</label>
<input type="range"
min="-200"
max="200"
className="form-range"
value={hori}
onChange={(e) => setHori(e.target.value)}
 />
   </div>
      <div className="form-gtup">
<label>ammoud</label>
<input type="range"
min="-200"
max="200"
className="form-range"
value={veri}
onChange={(e) => setVeri(e.target.value)} />
   </div>
      <div className="form-gtup">
<label>taridid</label>
<input type="range"
min="0"
max="200"
 className="form-range"
value={blur}
onChange={(e) => setBlur(e.target.value)}
  />
   </div>
      <div className="form-gtup">
<label>gostaresh rang</label>
<input type="range"
min="-100"
max="50"
 className="form-range"
value={spread}
onChange={(e) => setSpread(e.target.value)}
  />
  </div>
      <div className="form-gtup">
<label>color</label>
<input type="color"
value={color}
onChange={(e) => setColor(e.target.value)}
 />
   </div>
   
   </div>
   <div className="outpot">
   <div className="box" style={{ boxShadow: `${hori}px ${veri}px ${blur}px ${spread}px ${color}` }}>
   <p>box-shadow: {hori}px {veri}px {blur}px {spread}px {color}</p>
   </div>
   </div>
   
   </div>

    
  );
}

export default App;

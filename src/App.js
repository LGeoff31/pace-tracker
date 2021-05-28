import './App.css';
import { useState, useEffect } from 'react';

function calculatePace(time, distance) {
  // time / distance

  if (distance === 0) return 0;
  return (time / distance).toFixed(2);
}

function formatTime(time) {
  const mins = Math.floor(time);
  let second = ((time - mins) * 100 * 0.6).toFixed(0);
  return `${mins}:${second}`;

}

function App() {
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [pace, setPace] = useState(0);

  function handleTimeInputChange(e) {
    setTime(parseFloat(e.target.value));
  }
  function handleDistanceInputChange(e) {
    setDistance(parseFloat(e.target.value));
  }

  useEffect(() => {
    setPace(formatTime(calculatePace(time, distance)));

  }, [time, distance])

  return (
    <div className="App">
      <h1 className="title">Pace calculator!</h1>
      <div>
        <p className="prompt">Enter the time in mins</p>
        <input placeholder="45 mins" className="input" onChange={handleTimeInputChange}/>
      </div>
      <div>
        <p className="prompt">Enter the distance in km</p>
        <input placeholder="2 km" className="input" onChange={handleDistanceInputChange}/>
      </div>

      <p className="result">Result: {pace} mins per km</p>
      <p className="name"> Made by Geoffrey Lee </p>

    </div>
  );
}

export default App;

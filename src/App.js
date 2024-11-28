import React, { useState } from 'react';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [converted, setConverted] = useState(null);
  const [error, setError] = useState('');

  const convertTemperature = () => {
    let temp = parseFloat(temperature);
    if (isNaN(temp)) {
      setError('Please enter a valid number.');
      return;
    }
    if (unit === 'Celsius' && temp < -273.15) {
      setError('Temperature cannot be below absolute zero!');
      return;
    }
    if (unit === 'Fahrenheit' && temp < -459.67) {
      setError('Temperature cannot be below absolute zero!');
      return;
    }
    setError('');
    if (unit === 'Celsius') {
      setConverted({
        celsius: temp + ' °C',
        fahrenheit: (temp * 9) / 5 + 32 + ' °F',
        kelvin: temp + 273.15 + ' K',
      });
    } else if (unit === 'Fahrenheit') {
      setConverted({
        celsius: ((temp - 32) * 5) / 9 + ' °C',
        fahrenheit: temp + ' °F',
        kelvin: ((temp - 32) * 5) / 9 + 273.15 + ' K',
      });
    } else if (unit === 'Kelvin') {
      setConverted({
        celsius: temp - 273.15 + ' °C',
        fahrenheit: ((temp - 273.15) * 9) / 5 + 32 + ' °F',
        kelvin: temp + ' K',
      });
    }
  };

  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <input
        type="text"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="Enter temperature"
      />
      <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
      <button onClick={convertTemperature}>Convert</button>
      {error && <p className="error">{error}</p>}
      {converted && (
        <div>
          <h2>Converted Results:</h2>
          <p>{converted.celsius}</p>
          <p>{converted.fahrenheit}</p>
          <p>{converted.kelvin}</p>
        </div>
      )}
    </div>
  );
}

export default App;
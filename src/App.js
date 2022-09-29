import React, { useState } from 'react';
import './App.css';
import Slider from '@mui/material/Slider';
import Box from "@mui/material/Box";

function App() {
  const [counter, setCounter] = useState(0)
  const [kValue, setKValue] = useState(0)

  const handleClick1 = () => {
    if (counter === 10) {
      return;
    }
    setCounter(counter + 1)
  }

  const handleClick2 = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1)
  }

  const handleChange = (event , newValue) => {
    setCounter(newValue/500);
  }

  const handleChange2 = (event , newValue) => {
    setCounter(newValue/1000);
  }

  const handleChange3 = (event , newValue) => {
    setKValue(newValue);
  }

  const investedValue = counter * 500;

  const miningPower = counter * 1000;

  const marks = [
    {
      value: 0,
      label: '$0',
    },
    {
      value: 5000,
      label: '$5000',
    },
  ];

  const marks1 = [
    {
      value: 0,
      label: '0TH/s',
    },
    {
      value: 10000,
      label: '10000TH/s',
    },
  ];

  const marks2 = [
    {
      value: 0,
      label: '$0.01',
    },
    {
      value: 100,
      label: '$100',
    },
  ];

  return (
    <div className="App">
      <div className="main">
        <div className="counter-group">
          <div className="button+" onClick={handleClick1}>+</div>
          <div className="Counter-value">{counter}</div>
          <div className="button-" onClick={handleClick2}>-</div>
        </div>
        <div className="slider">
          <Box width={350}>
            <Slider
              aria-label="default"
              min={0}
              max={5000}
              defaultValue={1000}
              valueLabelDisplay="auto"
              step={500}
              value={investedValue}
              // onChange={(value) => setCounter(value / 500)}
              onChange={handleChange}
              marks={marks}
            />
          </Box>
          <div className="invested-button">Invested Value {investedValue}</div>
        </div>
        <div className="slider">
          <Box width={350}>
            <Slider
              aria-label="default"
              min={0}
              max={10000}
              defaultValue={0}
              step={1000}
              value={miningPower}
              onChange={handleChange2}
              marks={marks1}
              valueLabelDisplay="auto"
            />
          </Box>
          <div className="mining-button">mining power {miningPower}</div>
        </div>
        <div className="slider">
          <Box width={350}>
            <Slider
              aria-label="default"
              min={0}
              max={100}
              defaultValue={0}
              step={1}
              marks={marks2}
              valueLabelDisplay="auto"
              value={kValue}
              onChange={handleChange3}
            />
          </Box>
          <div className="mining-button">Kadena Price</div>
        </div>
        <div className="earning-tab">
          <div className="earning-tab-title">Earning</div>
          <div className="earning-tab-main-title">
            <div className="earning-tab-main">Daily</div>
            <div className="earning-tab-main">Daily</div>
            <div className="earning-tab-main">Daily</div>
            <div className="earning-tab-main">Daily</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

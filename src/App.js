import React from 'react';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';
import freeCodeCampLogo from './images/FreeCodeCamp_logo.svg.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';

function App() {

  const [input, setInput ] = useState('');

  const addInput = val => {
    setInput(input + val)
  }

  const calcResult = () => {
    if (input) {
      setInput(evaluate(input));
    }
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='FreeCodeCamp Logo' />
      </div>

      <div className='calc-container'>
        <Screen input={input} />
        <div className='line'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='line'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='line'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='line'> 
          <Button handleClick={calcResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <ClearButton handleClear={() => setInput('')}>Clear</ClearButton>
      </div>
    </div>
  );
}

export default App;

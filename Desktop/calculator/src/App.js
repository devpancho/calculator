import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState("")


  const clickHandler = (e) => {
    setResult(result.concat(e.target.name))
  }


  const clear = () =>{
    setResult("")
  }

  const del = () => {
    setResult(result.slice(0, - 1))
  }


  const calculate  = () => {
    setResult(eval(result).toString())
  }

  return (
    <div className="header">
      <h1>
        <header>THE BEST CALCULATOR</header>
      </h1>

    <div className='container'>
      <form>
        <input type="text" value={result}/>
      </form>
      <div className="keypad">
      <button  onClick={clear} id='clear'>AC</button>
          <button className='symbols' onClick={del} id='delete' >DEL</button>
          <button className='symbols' name='/' onClick={clickHandler}>&divide; </button>
          <button  name='7' onClick={clickHandler}>7</button>
          <button name='8' onClick={clickHandler}>8</button>
          <button name='9' onClick={clickHandler}>9</button>
          <button className='symbols' name='*' onClick={clickHandler}>&times; </button>
          <button name='4' onClick={clickHandler}>4</button>
          <button name='5' onClick={clickHandler}>5</button>
          <button name='6' onClick={clickHandler}>6</button>
          <button className='symbols' name='-' onClick={clickHandler}>&ndash;</button>
          <button name='1' onClick={clickHandler}>1</button>
          <button name='2' onClick={clickHandler}>2</button>
          <button name='3' onClick={clickHandler}>3</button>
          <button className='symbols' name='+' onClick={clickHandler}>+</button>
          <button name='0' onClick={clickHandler}>0</button>
          <button name='.' onClick={clickHandler}>.</button>
          <button onClick={calculate} id='result'>=</button>

      </div>
    </div>
    </div>
  );
}

export default App;

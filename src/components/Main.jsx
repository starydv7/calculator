import React, { useReducer } from 'react';
import "./style.css";

function reducer(state, action) {
    
}
const Main = () => {
    const[{currentOperand,previousOperand,operation},dispatch]=useReducer(reducer,[])

  return (
    <div className="cal-grid">
      <div className="output">
              <div className="pre-operand">{previousOperand}{operation}</div>
              <div className="curr-operand">{currentOperand}</div>
      </div>
      <button className="span-two">Ac</button>
      <button>DEL</button>
      <button>%</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className='span-two'>=</button>

    </div>
  );
}

export default Main
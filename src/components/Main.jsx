import React, { useReducer } from 'react';
import "./style.css";
import Digit from './Digit';

 export const ACTIONS = {
    ADD_DIGIT: "add-digits",
    CHOOSE_OPERATION: "choose-operation",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    EVALUTE:'evaluate',
}
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand || ""}${payload.digit}`,
      };
  }
}

const Main = () => {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})
   
    
  return (
    <div className="cal-grid">
      <div className="output">
              <div className="pre-operand">{previousOperand}{operation}</div>
              <div className="curr-operand">{currentOperand}</div>
      </div>
      <button className="span-two">Ac</button>
      <button>DEL</button>
      <Digit digit="%" dispatch={dispatch}/>
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
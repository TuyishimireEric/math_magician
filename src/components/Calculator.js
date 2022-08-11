import React, { useState } from 'react';
import calculate from '../logic/calculator';

export default function Calculator() {
  const [initState, setInitState] = useState({
    total: 0,
    operation: null,
    next: null,
  });
  const { total, operation, next } = initState;
  const clickListener = (e) => {
    const result = e.target.value;
    setInitState((prevState) => calculate(prevState, result));
  };
  const result = `${total || ''}${operation || ''}${next || ''}`;
  return (
    <form action="#">
      <div className="text">{result || '0'}</div>
      <div className="calc-btn">
        <input type="button" value="AC" onClick={clickListener} />
        <input type="button" value="+/-" onClick={clickListener} />
        <input type="button" value="%" onClick={clickListener} />
        <input type="button" value="÷" onClick={clickListener} className="sign" />
        <input type="button" value="7" onClick={clickListener} />
        <input type="button" value="8" onClick={clickListener} />
        <input type="button" value="9" onClick={clickListener} />
        <input type="button" value="x" onClick={clickListener} className="sign" />
        <input type="button" value="4" onClick={clickListener} />
        <input type="button" value="5" onClick={clickListener} />
        <input type="button" value="6" onClick={clickListener} />
        <input type="button" value="-" onClick={clickListener} className="sign" />
        <input type="button" value="1" onClick={clickListener} />
        <input type="button" value="2" onClick={clickListener} />
        <input type="button" value="3" onClick={clickListener} />
        <input type="button" value="+" onClick={clickListener} className="sign" />
        <input type="button" value="0" onClick={clickListener} className="zero" />
        <input type="button" value="." onClick={clickListener} />
        <input type="button" value="=" onClick={clickListener} className="sign" />
      </div>
    </form>
  );
}

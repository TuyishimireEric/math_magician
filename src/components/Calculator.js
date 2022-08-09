import React from 'react';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <form action="#">
        <input type="text" placeholder="0" className="number" />
        <div className="calc-btn">
          <input type="button" value="AC" />
          <input type="button" value="+/-" />
          <input type="button" value="%" />
          <input type="button" value=":" className="sign" />
          <input type="button" value="7" />
          <input type="button" value="8" />
          <input type="button" value="9" />
          <input type="button" value="x" className="sign" />
          <input type="button" value="4" />
          <input type="button" value="5" />
          <input type="button" value="6" />
          <input type="button" value="-" className="sign" />
          <input type="button" value="1" />
          <input type="button" value="2" />
          <input type="button" value="3" />
          <input type="button" value="+" className="sign" />
          <input type="button" value="0" className="zero" />
          <input type="button" value="." />
          <input type="button" value="=" className="sign" />
        </div>
      </form>
    );
  }
}

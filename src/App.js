import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <div className="App">
          <div className="top">
            <h1 className="title">Math magician</h1>
            <nav className="nav">
              <Link className="a" to="/">Home</Link>
              <hr />
              <Link className="a" to="/Calculator">Calculator</Link>
              <hr />
              <Link className="a" to="/Quote">Quote</Link>
            </nav>
          </div>
          <section className="section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Calculator" element={<Calculator />} />
              <Route path="Quote" element={<Quote />} />
            </Routes>
          </section>
        </div>
      </>
    );
  }
}

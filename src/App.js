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
          <nav className="nav">
            <Link className="a" to="/">Home</Link>
            <Link className="a" to="/Calculator">Calculator</Link>
            <Link className="a" to="/Quote">Quote</Link>
          </nav>
          <section className="section">
            <h1 className="title">Math magician</h1>
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

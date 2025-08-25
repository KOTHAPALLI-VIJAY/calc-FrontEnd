import React, { Component } from 'react';
import './App.css';
import { callApi, BASEURL } from './api';

class App extends Component {
  constructor() {
    super();
    this.state = { A: 0, B: 0, RES: 0 };
    this.getResponse = this.getResponse.bind(this);
  }

  add() {
    callApi("GET", BASEURL + `add/${this.state.A}/${this.state.B}`, "", this.getResponse);
  }

  sub() {
    callApi("GET", BASEURL + `sub/${this.state.A}/${this.state.B}`, "", this.getResponse);
  }

  mul() {
    callApi("GET", BASEURL + `mul/${this.state.A}/${this.state.B}`, "", this.getResponse);
  }

  div() {
    callApi("GET", BASEURL + `div/${this.state.A}/${this.state.B}`, "", this.getResponse);
  }

  getResponse(res) {
    this.setState({ RES: res });
  }

  loadInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { A, B, RES } = this.state;
    return (
      <>
        <header className="header">
          <div className='title'>✨ Simple Calculator ✨</div>
        </header>

        <section className="main">
          <div className="card">
            <table>
              <tbody>
                <tr>
                  <td>Enter the value of A</td>
                  <td>
                    <input
                      type='text'
                      id='T1'
                      name='A'
                      value={A}
                      onChange={(event) => this.loadInputChange(event)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Enter the value of B</td>
                  <td>
                    <input
                      type='text'
                      id='T2'
                      name='B'
                      value={B}
                      onChange={(event) => this.loadInputChange(event)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Result</td>
                  <td>
                    <div className="result-box">{RES}</div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button className="add" onClick={() => this.add()}>ADD</button>
                    <button className="sub" onClick={() => this.sub()}>SUB</button>
                    <button className="mul" onClick={() => this.mul()}>MUL</button>
                    <button className="div" onClick={() => this.div()}>DIV</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer className="footer">
          © 2025 Simple Calculator | Designed with ❤️
        </footer>
      </>
    );
  }
}

export default App;

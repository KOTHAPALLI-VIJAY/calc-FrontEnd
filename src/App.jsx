import React, { Component } from 'react';
import './App.css';
import { callApi, BASEURL } from './api';

class App extends Component {
  constructor() {
    super();
    this.state = { A: 0, B: 0, RES: 0, error: "" };
    this.getResponse = this.getResponse.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  add() {
    callApi("GET", BASEURL + `add/${this.state.A}/${this.state.B}`, "", this.getResponse, this.handleError);
  }

  sub() {
    callApi("GET", BASEURL + `sub/${this.state.A}/${this.state.B}`, "", this.getResponse, this.handleError);
  }

  mul() {
    callApi("GET", BASEURL + `mul/${this.state.A}/${this.state.B}`, "", this.getResponse, this.handleError);
  }

  div() {
    callApi("GET", BASEURL + `div/${this.state.A}/${this.state.B}`, "", this.getResponse, this.handleError);
  }

  getResponse(res) {
    this.setState({ RES: res, error: "" });
  }

  handleError(err) {
    this.setState({ error: "⚠️ Failed to fetch result. Please check backend!" });
  }

  loadInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { A, B, RES, error } = this.state;
    return (
      <>
        <header>
          <div className="title">Simple Calculator</div>
        </header>
        <section>
          <table>
            <tbody>
              <tr>
                <td>Enter the value of A</td>
                <td>
                  <input
                    type="text"
                    id="T1"
                    name="A"
                    value={A}
                    onChange={(event) => this.loadInputChange(event)}
                  />
                </td>
              </tr>
              <tr>
                <td>Enter the value of B</td>
                <td>
                  <input
                    type="text"
                    id="T2"
                    name="B"
                    value={B}
                    onChange={(event) => this.loadInputChange(event)}
                  />
                </td>
              </tr>
              <tr>
                <td>Result</td>
                <td>
                  {error ? <label style={{ color: "red" }}>{error}</label> : <label id="L1">{RES}</label>}
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button onClick={() => this.add()}>ADD</button>&nbsp;
                  <button onClick={() => this.sub()}>SUB</button>&nbsp;
                  <button onClick={() => this.mul()}>MUL</button>&nbsp;
                  <button onClick={() => this.div()}>DIV</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;

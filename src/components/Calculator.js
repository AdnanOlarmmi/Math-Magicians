/* eslint-disable */
import React, { Component } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line
class Calculator extends Component {


  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="output">
        { next || operation || total || 0 }
        </div>
        <table className="input" cellSpacing={0}>
          <tr>
            <td onClick={this.calculateValues.bind(this)}>AC</td>
            <td onClick={this.calculateValues.bind(this)}>+/-</td>
            <td onClick={this.calculateValues.bind(this)}>%</td>
            <td onClick={this.calculateValues.bind(this)}>÷</td>
          </tr>
          <tr>
            <td onClick={this.calculateValues.bind(this)}>7</td>
            <td onClick={this.calculateValues.bind(this)}>8</td>
            <td onClick={this.calculateValues.bind(this)}>9</td>
            <td onClick={this.calculateValues.bind(this)}>x</td>
          </tr>
          <tr>
            <td onClick={this.calculateValues.bind(this)}>4</td>
            <td onClick={this.calculateValues.bind(this)}>5</td>
            <td onClick={this.calculateValues.bind(this)}>6</td>
            <td onClick={this.calculateValues.bind(this)}>-</td>
          </tr>
          <tr>
            <td onClick={this.calculateValues.bind(this)}>1</td>
            <td onClick={this.calculateValues.bind(this)}>2</td>
            <td onClick={this.calculateValues.bind(this)}>3</td>
            <td onClick={this.calculateValues.bind(this)}>+</td>
          </tr>
          <tr>
            <td colSpan={2} onClick={this.calculateValues.bind(this)}>0</td>
            <td onClick={this.calculateValues.bind(this)}>.</td>
            <td onClick={this.calculateValues.bind(this)}>=</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;

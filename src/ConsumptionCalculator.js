import React, { Component } from 'react';
import './App.css';
import {loads, pi_models} from './Common'
import {Helmet} from "react-helmet";

class ConsumptionCalculator extends Component {
  constructor(props) {
    super(props);

    this.time_intervals = {
      'daily': 24,
      'weekly': 168,
      'monthly': 720,
      'quaterly': 2160,
      'yearly': 8760
    }

    this.state = {
      'cost': '',
      'interval': this.time_intervals.yearly,
      'kwh': '',
      'kwh_price': '',
      'load': 0.5,
      'model': ''
    }

    this.calc = this.calc.bind(this);
    this.intervalChange = this.intervalChange.bind(this);
    this.loadChange = this.loadChange.bind(this);
    this.modelChange = this.modelChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
  }

  intervalChange(event) {
    let value = parseInt(event.target.value, 10);
    this.setState({ 'interval': value }, function () {
      this.calc();
    });
  }

  loadChange(event) {
    let value = parseFloat(event.target.value);
    this.setState({ 'load': value }, function () {
      this.calc();
    });
  }

  modelChange(event) {
    let value = event.target.value;
    this.setState({ 'model': value }, function () {
      this.calc();
    });
  }

  priceChange(event) {
    let value = parseFloat(event.target.value);
    this.setState({ 'kwh_price': value }, function () {
      this.calc();
    });
  }

  calc() {
    if (this.state.model === '') {
      return;
    }
    let model = pi_models[this.state.model]
    let power_con = model.power_con_min + ((model.power_con_max - model.power_con_min) * this.state.load)
    let kwh = power_con / 1000
    let total_kwh = kwh * this.state.interval
    this.setState({ 'kwh': total_kwh.toFixed(4) });

    let cost = this.state.kwh_price * total_kwh || 0
    cost = cost.toFixed(2);
    this.setState({ 'cost': cost });
  }

  render() {
    return (
      <div className="App container">
        <Helmet>
          <title>Raspberry Pi Power Consumption Calculator</title>
          <meta name="description" content="A calculator to determine the power consumption of your Raspberry Pi model."/>
          <meta itemprop="name" content="Raspberry Pi Power Consumption Calculator" />
          <meta itemprop="description" content="A calculator to determine the power consumption of your Raspberry Pi model."/>
        </Helmet>
        <h1>Raspberry Pi Power Consumption Calculator</h1>
        <p className="row">
          Calculate the power consumption of your Raspberry Pi model (including Zero, Zero W, 1 A, 1 A+, 1 B, 1 B+, 2 B, 3 B+, 4 B, 400) when running it 24/7.
          <br></br>
          If you enter your kWh price the total costs will be calculated as well.
        </p>
        <form>
          <div className="row form-group">
            <select className="form-control" value={this.state.model} onChange={this.modelChange}>
              <option value='' disabled>Select your Model</option>
              {
                Object.keys(pi_models).map((model_key, index) => (
                  <option key={model_key} value={model_key}>
                    {pi_models[model_key].name} (~{pi_models[model_key].power_con_min}–{pi_models[model_key].power_con_max} W)
                  </option>
                ))
              }
            </select>
          </div>

          <div className="row form-group">
            <label className="form-check-label">Load:</label>
            {
              Object.keys(loads).map((load, index) => (
                <div key={load} className="form-check form-check-inline">
                  <input type="radio" className="form-check-input" name="load" value={loads[load]} onChange={this.loadChange} checked={this.state.load === loads[load]} />
                  <label className="form-check-label">{load}</label>
                </div>
              ))
            }
          </div>

          <div className="row form-group">
            <label className="form-check-label">Time Range:</label>
            {
              Object.keys(this.time_intervals).map((interval, index) => (
                <div key={interval} className="form-check form-check-inline">
                  <input type="radio" className="form-check-input" name="interval" value={this.time_intervals[interval]} onChange={this.intervalChange} checked={this.state.interval === this.time_intervals[interval]} />
                  <label className="form-check-label">{interval}</label>
                </div>
              ))
            }
          </div>

          <div className="row form-group">
            <div className="input-group">
              <input type="number" min="0" step="0.01" className="form-control" placeholder="0.00" value={this.state.kwh_price} onChange={this.priceChange} />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">price/kWh</span>
              </div>
            </div>
          </div>

          <div className="row form-group">
            <label className="form-check-label">Total consumption:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="0.0000" value={this.state.kwh} readOnly />
              <div className="input-group-append">
                <span className="input-group-text">kWh</span>
              </div>
            </div>
          </div>

          <div className="row form-group">
            <label className="form-check-label">Total costs:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="0.00" value={this.state.cost} readOnly />
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default ConsumptionCalculator;

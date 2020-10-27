import React, { Component } from 'react';
import './App.css';
import {loads, pi_models, voltage} from './Common'
import {Helmet} from "react-helmet";

class BatteryCapacityCalculator extends Component {
  constructor(props) {
    super(props);

    // src: https://de.wikipedia.org/wiki/Raspberry_Pi
    this.time_intervals = {
      'daily': 24,
      'weekly': 168,
      'monthly': 720,
      'quaterly': 2160,
      'yearly': 8760
    }

    this.state = {
      'load': 0.5,
      'model': '',
      'runtime': '',
      'capacity': 0
    }

    this.calc = this.calc.bind(this);
    this.loadChange = this.loadChange.bind(this);
    this.modelChange = this.modelChange.bind(this);
    this.runtimeChange = this.runtimeChange.bind(this);
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

  runtimeChange(event) {
    let value = parseFloat(event.target.value);
    this.setState({ 'runtime': value }, function () {
      this.calc();
    });
  }

  calc() {
    if (this.state.model === '') {
      return;
    }
    let model = pi_models[this.state.model]
    let power_con = model.power_con_min + ((model.power_con_max - model.power_con_min) * this.state.load)
    let total_wh = power_con * this.state.runtime
    let capacity = (total_wh / voltage) * 1000
    capacity = capacity.toFixed(0)
    this.setState({ 'capacity': capacity });
  }

  render() {
    return (
      <div className="App container">
        <Helmet>
          <title>Raspberry Pi Battery Capacity Calculator</title>
          <meta name="description" content="A calculator to determine the required battery capacity to power your Raspberry Pi for your desired run time."/>
          <meta itemprop="name" content="Raspberry Pi Battery Capacity Calculator" />
          <meta itemprop="description" content="A calculator to determine the required battery capacity to power your Raspberry Pi for your desired run time."/>
        </Helmet>
        <h1>Raspberry Pi Battery Capacity Calculator</h1>
        <p className="row">
          Calculate the required battery capacity to power your Raspberry Pi model (including Zero, Zero W, 1 A, 1 A+, 1 B, 1 B+, 2 B, 3 B+, 4 B) for your desired run time.
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
            <label className="form-check-label">Desired Runtime:</label>
            <div className="input-group">
              <input type="number" className="form-control" min="0" step="0.1" placeholder="12" value={this.state.runtime} onChange={this.runtimeChange} />
              <div className="input-group-append">
                <span className="input-group-text">h</span>
              </div>
            </div>
          </div>

          <div className="row form-group">
            <label className="form-check-label">Required capacity:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="0.0000" value={this.state.capacity} readOnly />
              <div className="input-group-append">
                <span className="input-group-text">mAh</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BatteryCapacityCalculator;

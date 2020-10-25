import React, { Component } from 'react';
import './App.css';
import {loads, pi_models, voltage} from './Common'
import {Helmet} from "react-helmet";

class BatteryRuntimeCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'load': 0.5,
      'model': '',
      'capacity': '',
      'runtime': 0
    }

    this.calc = this.calc.bind(this);
    this.loadChange = this.loadChange.bind(this);
    this.modelChange = this.modelChange.bind(this);
    this.capacityChange = this.capacityChange.bind(this);
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

  capacityChange(event) {
    let value = parseFloat(event.target.value);
    this.setState({ 'capacity': value }, function () {
      this.calc();
    });
  }

  calc() {
    if (this.state.model === '') {
      return;
    }
    let model = pi_models[this.state.model]
    let power_con = model.power_con_min + ((model.power_con_max - model.power_con_min) * this.state.load)
    let energy = voltage * (this.state.capacity / 1000)
    let runtime = energy / power_con
    runtime = runtime.toFixed(2);
    this.setState({ 'runtime': runtime });
  }

  render() {
    return (
      <div className="App container">
        <Helmet>
          <title>Raspberry Pi Battery Runtime Calculator</title>
          <meta name="description" content="A calculator to estimate the run time of your Raspberry Pi when powering it using a battery with a given capacity."/>
          <meta itemprop="name" content="Raspberry Pi Battery Runtime Calculator" />
          <meta itemprop="description" content="A calculator to estimate the run time of your Raspberry Pi when powering it using a battery with a given capacity."/>
        </Helmet>
        <h1>Raspberry Pi Battery Runtime Calculator</h1>
        <p className="row">
          Calculate the run time that you can expect when powering your Raspberry Pi model (including Zero, Zero W, 1 A, 1 A+, 1 B, 1 B+, 2 B, 3 B+, 4 B) using a battery with a given capacity.
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
            <label className="form-check-label">Available capacity:</label>
            <div className="input-group">
              <input type="number" className="form-control" placeholder="10000" min="0" step="1" value={this.state.capacity} onChange={this.capacityChange} />
              <div className="input-group-append">
                <span className="input-group-text">mAh</span>
              </div>
            </div>
          </div>

          <div className="row form-group">
            <label className="form-check-label">Resulting runtime:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="0.0000" value={this.state.runtime} readOnly />
              <div className="input-group-append">
                <span className="input-group-text">h</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BatteryRuntimeCalculator;

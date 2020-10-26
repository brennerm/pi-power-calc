import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);

    // src: https://de.wikipedia.org/wiki/Raspberry_Pi
    this.pi_models = {
      '0': {
        'name': 'Raspberry Pi Zero',
        'power_con_min': 0.5,
        'power_con_max': 0.7
      },
      '0w': {
        'name': 'Raspberry Pi Zero W',
        'power_con_min': 0.5,
        'power_con_max': 0.7
      },
      '1a': {
        'name': 'Raspberry Pi 1 A',
        'power_con_min': 2.5,
        'power_con_max': 2.5
      },
      '1a+': {
        'name': 'Raspberry Pi 1 A+',
        'power_con_min': 0.4,
        'power_con_max': 1.2
      },
      '1b': {
        'name': 'Raspberry Pi 1 B',
        'power_con_min': 3.5,
        'power_con_max': 3.5
      },
      '1b+': {
        'name': 'Raspberry Pi 1 B+',
        'power_con_min': 0.9,
        'power_con_max': 3.0
      },
      '2b': {
        'name': 'Raspberry Pi 2 B',
        'power_con_min': 1.1,
        'power_con_max': 2.3
      },
      '3b': {
        'name': 'Raspberry Pi 3 B',
        'power_con_min': 1.4,
        'power_con_max': 3.7
      },
      '3b+': {
        'name': 'Raspberry Pi 3 B+',
        'power_con_min': 1.9,
        'power_con_max': 5.1
      },
      '4b': {
        'name': 'Raspberry Pi 4 B',
        'power_con_min': 3.4,
        'power_con_max': 7.6
      }
    }

    this.time_intervals = {
      'daily': 24,
      'weekly': 168,
      'monthly': 720,
      'quaterly': 2160,
      'yearly': 8760
    }

    this.load = {
      'low': 0,
      'med': 0.5,
      'high': 1
    }

    this.exchange_rates = {}

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
    let model = this.pi_models[this.state.model]
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Raspberry Pi Power Calculator</h1>
        </header>
        <p>
          Calculate the power consumption of your Raspberry Pi model (including Zero, Zero W, 1 A, 1 A+, 1 B, 1 B+, 2 B, 3 B+, 4 B) when running it 24/7.
          <br></br>
          If you enter your kWh price we'll calculate the total costs as well.
        </p>
        <form className="container">
          <div className="row form-group">
            <select className="form-control" value={this.state.model} onChange={this.modelChange}>
              <option value='' disabled>Select your Model</option>
              {
                Object.keys(this.pi_models).map((model_key, index) => (
                  <option key={model_key} value={model_key}>
                    {this.pi_models[model_key].name} (~{this.pi_models[model_key].power_con_min}–{this.pi_models[model_key].power_con_max} W)
                  </option>
                ))
              }
            </select>
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
            <label className="form-check-label">Load:</label>
            {
              Object.keys(this.load).map((load, index) => (
                <div key={load} className="form-check form-check-inline">
                  <input type="radio" className="form-check-input" name="load" value={this.load[load]} onChange={this.loadChange} checked={this.state.load === this.load[load]} />
                  <label className="form-check-label">{load}</label>
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

export default App;
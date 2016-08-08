import React, {Component} from 'react';
import ColorPicker,{ HueSpectrum } from 'react-color-picker';
import './export.scss';

export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('export', this )
    return (
      <div>
          <p>Export</p>
      </div>
    )
  }
}
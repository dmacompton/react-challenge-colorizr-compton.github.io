import React, {Component} from 'react';
import ColorPicker,{ HueSpectrum } from 'react-color-picker';
import './create.scss';

export default class Create extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      displayName: 'App',
      COLOR: '#fff'
    };
  }


  onDrag(color, c){
    this.props.setColor(color);
  }
  
  render() {
    let color = this.props.color.mainColor;

    return (
      <div className="createContainer" style={{backgroundColor: color}}>
        <h1>Choose your color</h1>
        <ColorPicker value={color} onDrag={this.onDrag.bind(this)} defaultValue={color} />
      </div>
    )
  }
}
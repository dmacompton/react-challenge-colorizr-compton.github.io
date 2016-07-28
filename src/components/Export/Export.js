import React, {Component} from 'react';
import ColorPicker from 'react-color-picker';

export default class Export extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      displayName: 'App',
      COLOR: '#fff'
    };
  }


  onDrag(color, c){
    // устовить цвет

    this.props.setColor(color);
  }
  
  render() {
    return (
      <div className="container" style={{backgroundColor: this.props.color.mainColor}}>
        <div className='row'>
          <div className='col-md-12'>
            <p className="text-center">Export</p>
            <ColorPicker value={this.props.color.mainColor} onDrag={this.onDrag.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}
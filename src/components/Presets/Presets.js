import React, {Component} from 'react';

export default class Present extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p className="text-center">Present</p>
          </div>
        </div>
      </div>
    )
  }
}
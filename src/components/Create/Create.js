import React, {Component} from 'react';

export default class Create extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('create', this )
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p className="text-center">Create</p>
          </div>
        </div>
      </div>
    )
  }
}
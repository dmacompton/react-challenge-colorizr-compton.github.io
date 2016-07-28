import React, {Component} from 'react';
import { Link } from 'react-router';
import './notfound.scss';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <p className="text-center">Страница не найдена. Вернуться на <Link to='/'>главную</Link>?</p>
          </div>
        </div>
      </div>
    )
  }
}
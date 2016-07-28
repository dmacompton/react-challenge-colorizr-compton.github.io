import React, {Component} from "react";
import {Link} from "react-router";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreator';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div className="colorizr-app">
        <Header/>
          {React.cloneElement(this.props.children, this.props)}
          <Counter />
        <Footer/>
      </div>
    )
  }
}

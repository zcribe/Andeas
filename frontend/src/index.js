import 'core-js/modules/es7.array.includes';
import 'core-js/modules/es6.array.fill';
import 'core-js/modules/es6.string.includes';
import 'core-js/modules/es6.string.trim';
import 'core-js/modules/es7.object.values';

import React, {Component} from 'react';
import ReactDOM from "react-dom";

import Home2 from "./components/home2";

import './index.scss'

export default class Index extends Component {
    render() {
        return (

            <Home2/>

        );
    }
}





const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Index/>, wrapper) : null;

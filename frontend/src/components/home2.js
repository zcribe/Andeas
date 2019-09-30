import React, {Component} from 'react';

import Intro from "./home2/intro/intro";
import Location from "./home2/location/location";
import Menu from "./home2/menu/menu";
import News from "./home2/news/news";


class Home2 extends Component {
    render() {
        return (
            <div className="homepage">
                <Intro/>
                <Menu/>
                <News/>
                <Location/>
            </div>
        );
    }
}

export default Home2;
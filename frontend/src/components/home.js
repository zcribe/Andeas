import React, {Component} from 'react';

import Entry from "./home/entry/entry";
import Location from "./home/location/location";
import Menu from "./home/menu/menu";
import News from "./home/news/news";


class Home extends Component {
    render() {
        return (
            <div className="bx--grid landing-page">
                <div className="bx--row landing-page__section section__entry" id="entry">
                    <Entry/>
                </div>
                <div className="bx--row landing-page__section section__menu" id="menu">
                    <Menu/>
                </div>
                <div className="bx--row landing-page__section section__news" id="news">
                    <News/>
                </div>
                <div className="bx--row landing-page__section section__location" id="location">
                    <Location/>
                </div>
            </div>
        );
    }
}

export default Home;
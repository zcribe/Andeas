import React, {Component} from 'react';

import Button from "carbon-components-react/lib/components/Button/Button";
import UnorderedList from "carbon-components-react/lib/components/UnorderedList/UnorderedList";
import ListItem from "carbon-components-react/lib/components/ListItem/ListItem";

import Map from "pigeon-maps";
import Marker from 'pigeon-marker/react'

class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            centerMap: [58.38062, 26.72509]
        };
        this.changeMapCenter = this.changeMapCenter.bind(this)
    }

    changeMapCenter(e) {
        console.log(e.id.valueOf())
    }


    render() {
        return (
            <div className="homepage__section homepage__section--location" id={"location"}>
                <div className="page-title page-title--dark">
                    <h2 className="page-title__core page-title__core--dark">
                        Hours & Location
                    </h2>
                </div>
                <div className="info">
                    <div className="info__info">
                        <h3 className="info__title">
                            Location
                        </h3>
                        <UnorderedList className="list">
                            <ListItem className="list__item">Asma tee 43</ListItem>
                            <ListItem className="list__item">Tartu, Estonia</ListItem>
                        </UnorderedList>
                    </div>
                    <div className="info__info">
                        <h3 className="info__title">
                            Hours
                        </h3>
                        <UnorderedList className="list">
                            <ListItem className="list__item">M-T 11:00-23:00</ListItem>
                            <ListItem className="list__item">F-S 11:00-24:00</ListItem>
                            <ListItem className="list__item">S Closed</ListItem>
                        </UnorderedList>
                    </div>
                    <div className="info__info">
                        <h3 className="info__title">
                            Parking
                        </h3>
                        <UnorderedList className="list">
                            <ListItem className="list__item" id={"nara"}>
                                Nara
                                tee 2 (3€/h)
                            </ListItem>
                            <ListItem className="list__item" id={"meeoru"}>
                                Meeoru
                                53 (1€/h)
                            </ListItem>
                            <ListItem className="list__item" id={"viisi"}>
                                Viisi
                                2 parkimismaja (5€/h)
                            </ListItem>
                        </UnorderedList>
                    </div>
                </div>
                <div className="social">
                    <div className="social__cta">
                        <a href="/reserve-a-table"><Button className="cta">Reserve a table</Button></a>
                    </div>
                    <div className="social__links">
                        <a href="#"><Button className="bx--btn--ghost link link--facebook">Facebook</Button></a>
                        <a href="#"><Button className="bx--btn--ghost link link--instagram">Instagram</Button></a>
                        <a href="#"><Button className="bx--btn--ghost link link--tiktok">Tik-Tok</Button></a>
                    </div>
                </div>
                <div className="map">
                    <Map
                        defaultCenter={[58.38062, 26.72509]}
                        center={this.state.centerMap}
                        zoom={14}
                        boxClassname="map__core">
                        <Marker anchor={[58.38062, 26.72509]} payload={1}/>
                    </Map>
                </div>
                <div className="decorations decorations--2">
                    <div className="decorations__text ">
                        ANDEAS
                    </div>
                </div>
                <div className="geometry geometry--1">
                    <img src="static/img/drawing.svg" alt=""/>
                </div>
                <div className="geometry geometry--2">
                    <img src="static/img/drawing.svg" alt=""/>
                </div>
            </div>
        );
    }
}

export default Location;
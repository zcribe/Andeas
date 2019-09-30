import React, {Component} from 'react';

import Button from "carbon-components-react/lib/components/Button/Button";
import UnorderedList from "carbon-components-react/lib/components/UnorderedList/UnorderedList";
import ListItem from "carbon-components-react/lib/components/ListItem/ListItem";

class Intro extends Component {
    render() {
        return (
            <div className="homepage__section homepage__section--intro">
                <div className="brand">
                    <img className={"brand__core"} src="/static/img/logo/logo_transparent.png" alt="andeas brand"/>
                </div>
                <div className="cta">
                    <a href="/reserve-a-table">
                        <Button>
                            Reserve a table
                        </Button>
                    </a>
                </div>
                <div className="navbar">
                    <UnorderedList className="navbar__list">
                        <ListItem className="navbar__nav"><a href="#location">Hours & Location</a></ListItem>
                        <ListItem className="navbar__nav"><a href="#menu">Read our menu</a></ListItem>
                        <ListItem className="navbar__nav"><a href="/events-and-catering">Catering
                            services</a></ListItem>
                        <ListItem className="navbar__nav"><a href="/contact-us">Contact us</a></ListItem>
                        <ListItem className="navbar__nav"><a href="#news">Read news</a></ListItem>
                    </UnorderedList>

                </div>
                <div className="story">
                    <h1 className="story__title">
                        ANDEAS
                    </h1>
                    <p className="story__subtext">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores fuga neque odit quos, veniam
                        voluptatum? Aspernatur at consequatur culpa ducimus eum, hic inobcaecati sed. Atque dolorem
                        fugiat natus repellat.
                    </p>
                </div>
                <div className="background background--video">
                    <video className="video" autoPlay muted loop>
                        <source src="/static/video/champagne.mp4" type="video/mp4" className="video__src"/>
                    </video>
                </div>
                <div className="background background--overlay">
                </div>
                <div className="background background--primer">
                </div>

            </div>
        );
    }
}

export default Intro;
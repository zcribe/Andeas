import React, {Component} from 'react';
import ReactDOM from "react-dom";

import {Breadcrumb, BreadcrumbItem, Button} from "carbon-components-react";

import "./components/services/services.scss"


class Services extends Component {
    render() {
        return (
            <div className="homepage__section homepage__section--menu services" id={"services"}>
                <div className="page-title page-title--dark">
                    <h2 className="page-title__core page-title__core--dark">
                        Events & Catering
                    </h2>
                </div>
                <Breadcrumb className="services__breadcrumbs" noTrailingSlash={true}>
                    <BreadcrumbItem href={"/"}>
                        Homepage
                    </BreadcrumbItem>
                    <BreadcrumbItem href={"/events-and-catering"} isCurrentPage={true}>
                        Events & catering
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="services__events">
                    <h3>Events</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at, cupiditate dolorum, ea eaque
                        est expedita necessitatibus possimus quia ratione, sed sequi vel voluptates. Culpa ducimus eaque
                        in labore magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolorem
                        ducimus eligendi, eos fugit ipsam laboriosam necessitatibus nemo, nisi obcaecati pariatur
                        placeat qui quidem quis sit, soluta ullam unde veritatis?</p>
                </div>
                <div className="services__catering">
                    <h3>Catering</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto, consequatur
                        deserunt dignissimos dolorem in itaque iusto natus nostrum nulla officiis quas quia,
                        repellendus, sequi sint suscipit veniam vitae voluptates. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Debitis doloremque ex molestias quas, quibusdam rerum totam. Amet
                        dicta earum expedita nam numquam, odio officia, quis rem repellat, ut velit vero!</p>
                </div>
                <div className={"services__cta"}>
                    <Button>Ask for a quote</Button>
                </div>
                
                <div className="services__image">
                    <img src="../static/img/priscilla-du-preez-W3SEyZODn8U-unsplash.jpg" alt="event and catering" className={"image__core"}/>
                </div>

                <div className="decorations decorations--1">
                    <div className="decorations__text ">
                        ANDEAS
                    </div>
                </div>
                <div className="geometry geometry--1">
                    <img src="static/img/drawing.svg" alt="decoration geometry"/>
                </div>
                <div className="geometry geometry--2">
                    <img src="static/img/drawing.svg" alt="decoration geometry"/>
                </div>

            </div>
        );
    }
}

export default Services;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Services/>, wrapper) : null;
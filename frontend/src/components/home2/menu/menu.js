import React, {Component} from 'react';

import {ButtonBack, ButtonNext, CarouselProvider, Slider} from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';

import SingleSlide from "./singleslide";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            width: window.innerWidth,
            height: window.innerHeight,
            visibleSlides: 3,
        };
    }


    componentDidMount() {
        fetch("api/core/menu-item/")
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    data: data,
                })
            });
    }

    render() {
        return (
            <div className="homepage__section homepage__section--menu" id={"menu"}>
                <div className="page-title page-title--dark">
                    <h2 className="page-title__core page-title__core--dark">
                        Menu
                    </h2>
                </div>
                <CarouselProvider
                    naturalSlideWidth={75}
                    naturalSlideHeight={75}
                    totalSlides={Object.keys(this.state.data).length}
                    visibleSlides={this.state.visibleSlides}
                    step={this.state.visibleSlides}
                    className={"carousel carousel--1"}
                    isPlaying
                >
                    <Slider>
                        {
                            this.state.data.map(function (data) {
                                return <SingleSlide item={data} key={data.id}/>
                            })
                        }
                    </Slider>
                    <div className={"carousel__nav"}>
                        <ButtonBack className={"bx--pagination-nav__page bx--pagination-nav__page--direction"}>
                            Back
                        </ButtonBack>
                        <ButtonNext className={"bx--btn bx--btn--primary carousel__nav--2"}>
                            Next
                        </ButtonNext>
                    </div>

                </CarouselProvider>


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

export default Menu;
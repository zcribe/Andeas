import React, {Component} from 'react';

import SingleNews from "./singlenews";
import {ButtonBack, ButtonNext, CarouselProvider, Slider} from "pure-react-carousel";
import {ArrowLeft16, ArrowRight16} from "@carbon/icons-react";


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            newsRowOne: [],
            newsRowTwo: [],
            visibleSlides: 2
        };
        this.chunk = this.chunk.bind()
    }

    componentDidMount() {
        fetch("api/core/news-item/")
            .then(res => res.json())
            .then((data) => {
                const chunks = this.chunk(data, 50);
                this.setState({
                    data: data,
                    newsRowOne:chunks[0],
                    newsRowTwo:chunks[1]
                })
            })
    }

    chunk(arr, len) {

        let chunks = [],
            i = 0,
            n = arr.length;

        while (i < n) {
            chunks.push(arr.slice(i, i += len));
        }

        return chunks;
    }

    render() {
        return (
            <div className="homepage__section homepage__section--news" id={"news"}>
                <div className="page-title page-title--light">
                    <h2 className="page-title__core page-title--light">
                        News
                    </h2>
                </div>
                <CarouselProvider
                    naturalSlideWidth={1}
                    naturalSlideHeight={1}
                    totalSlides={Object.keys(this.state.data).length}
                    visibleSlides={this.state.visibleSlides}
                    step={this.state.visibleSlides}
                    className={"card-group"}
                >
                    <Slider className={"card-group__slider"}>
                        {
                            this.state.newsRowOne.map(function (data) {
                                return <SingleNews item={data} key={data.id}/>
                            })
                        }
                    </Slider>
                    <Slider className={"card-group__slider"}>
                        {
                            this.state.newsRowTwo.map(function (data) {
                                return <SingleNews item={data} key={data.id}/>
                            })
                        }
                    </Slider>
                    <div className={"carousel__nav"}>
                        <ButtonBack className={"bx--btn bx--btn--secondary bx--btn--icon-only carousel__nav--1"}>
                            <ArrowLeft16 className={"fill--white"}/>
                        </ButtonBack>
                        <ButtonNext className={"bx--btn bx--btn--primary bx--btn--icon-only carousel__nav--2"}>
                            <ArrowRight16 className={"fill--white"}/>
                        </ButtonNext>
                    </div>

                </CarouselProvider>
                <div className="background background--video">
                    <video className="video" autoPlay muted loop>
                        <source src="/static/video/cookin2.mp4" type="video/mp4" className="video__src"/>
                    </video>
                </div>
                <div className="background background--overlay">
                </div>
                <div className="background background--primer">
                </div>
                <div className="decorations decorations--3">
                    <div className="decorations__text ">
                        ANDEAS
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
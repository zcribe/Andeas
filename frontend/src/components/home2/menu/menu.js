import React, {Component} from 'react';
import {CarouselProvider, Image, ImageWithZoom, Slide, Slider} from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';

import SingleSlide from "./singleslide";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }

    }

    componentDidMount() {
        fetch("api/core/menu-item/")
            .then(res => res.json())
            .then((data) => {this.setState({data: data})
        })
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
                    naturalSlideWidth={50}
                    naturalSlideHeight={50}
                    totalSlides={Object.keys(this.state.data).length}
                    visibleSlides={5}
                    className={"carousel carousel--1"}
                >
                    <Slider>
                        {
                            this.state.data.map(function (data) {
                                return <SingleSlide item={data} key={data.id}/>
                            })
                        }
                    </Slider>
                </CarouselProvider>

                <CarouselProvider
                    naturalSlideWidth={50}
                    naturalSlideHeight={50}
                    totalSlides={18}
                    visibleSlides={5}
                    className={"carousel carousel--2"}
                >
                    <Slider>
                        <Slide index={0} className={"menu__item"}>
                            <h5 className={"menu__title"}>Chicken Tikka Masala</h5>
                            <span className={"menu__price"}>7<span>€</span></span>
                            {/*<span className={"menu__cents"}>50</span>*/}

                            <ImageWithZoom
                                alt={"chicken tika masala"}
                                src={"../../../../static/img/caroline-attwood-bpPTlXWTOvg-unsplash.jpg"}/>

                        </Slide>
                        <Slide index={1} className={"menu__item"}>
                            <h5 className={"menu__title"}>Chicken Tikka Masala</h5>
                            <span className={"menu__price"}>7€</span>
                            <ImageWithZoom src={"../../../../static/img/david-metzer-zGeax2IzgVw-unsplash.jpg"}/>
                        </Slide>
                        <Slide index={2} className={"menu__item"}>
                            <h5 className={"menu__title"}>Chicken Tikka Masala</h5>
                            <span className={"menu__price"}>7€</span>
                            <ImageWithZoom
                                src={"../../../../static/img/henrique-felix-dMFIBmDYaIQ-unsplash.jpg"}/></Slide>
                        <Slide index={3} className={"menu__item"}>
                            <h5 className={"menu__title"}>Chicken Tikka Masala</h5>
                            <span className={"menu__price"}>7€</span>
                            <ImageWithZoom src={"../../../../static/img/priscilla-du-preez-W3SEyZODn8U-unsplash.jpg"}/></Slide>
                        <Slide index={4} className={"menu__item"}>
                            <h5 className={"menu__title"}>Chicken Tikka Masala</h5>
                            <span className={"menu__price"}>7€</span>
                            <ImageWithZoom
                                src={"../../../../static/img/michael-browning-MtqG1lWcUw0-unsplash.jpg"}/></Slide>
                        <Slide index={5}><Image src={"https://dummyimage.com/600x400/aaa/fff&text=Place"}/></Slide>
                        <Slide index={6}><Image src={"https://dummyimage.com/600x400/000/fff&text=Place"}/></Slide>
                        <Slide index={7}><Image src={"https://dummyimage.com/600x400/777/fff&text=Place"}/></Slide>
                        <Slide index={8}><Image src={"https://dummyimage.com/600x400/aaa/fff&text=Place"}/></Slide>
                        <Slide index={9}><Image src={"https://dummyimage.com/600x400/000/fff&text=Place"}/></Slide>
                        <Slide index={10}><Image src={"https://dummyimage.com/600x400/777/fff&text=Place"}/></Slide>
                        <Slide index={11}><Image src={"https://dummyimage.com/600x400/aaa/fff&text=Place"}/></Slide>
                        <Slide index={12}><Image src={"https://dummyimage.com/600x400/000/fff&text=Place"}/></Slide>
                        <Slide index={13}><Image src={"https://dummyimage.com/600x400/777/fff&text=Place"}/></Slide>
                        <Slide index={14}><Image src={"https://dummyimage.com/600x400/aaa/fff&text=Place"}/></Slide>
                        <Slide index={15}><Image src={"https://dummyimage.com/600x400/000/fff&text=Place"}/></Slide>
                        <Slide index={16}><Image src={"https://dummyimage.com/600x400/777/fff&text=Place"}/></Slide>
                        <Slide index={17}><Image src={"https://dummyimage.com/600x400/aaa/fff&text=Place"}/></Slide>
                    </Slider>
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
import React, {Component} from 'react';
import {CarouselProvider, Slide, Slider} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


class Menu extends Component {
    render() {

        return (
            <div className="bx--col-lg-12 menu">
                <div className="menu__text-decoration">ANDEAS</div>
                <div className="bx--row">
                    <div className="bx--col-lg-12 menu__title">
                        <h2 className="menu__title__core">Menu</h2>
                    </div>
                </div>
                <div className="bx--row menu__slider">
                    <CarouselProvider
                        naturalSlideWidth={200}
                        naturalSlideHeight={200}
                        totalSlides={3}
                    >
                        <Slider>
                            <Slide index={0}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={1}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={2}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={3}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={4}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={5}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={6}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={7}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={8}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
                <div className="bx--row menu__slider">
                    <CarouselProvider
                        naturalSlideWidth={200}
                        naturalSlideHeight={200}
                        totalSlides={3}
                    >
                        <Slider>
                            <Slide index={0}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={1}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={2}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={3}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={4}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={5}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={6}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={7}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                            <Slide index={8}><img src="https://dummyimage.com/200x200/000/fff.jpg" alt=""/></Slide>
                        </Slider>
                    </CarouselProvider>
                </div>

            </div>
        );
    }
}

export default Menu;
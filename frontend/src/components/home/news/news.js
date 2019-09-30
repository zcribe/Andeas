import React, {Component} from 'react';
import {ClickableTile} from "carbon-components-react/lib/components/Tile/Tile";
import Tag from "carbon-components-react/lib/components/Tag/Tag"

class News extends Component {
    render() {
        return (
            <div className="bx--col-md-12">

                <div className="bx--row">
                    <div className="bx--offset-lg-8 bx--col-lg-3 news__title">
                        <h2 className="news__title__core">News</h2>
                    </div>
                </div>
                <div className="bx--row news">
                    <div className="bx--col-lg-8 grid__container">
                        <div className="news__item">
                            <div className="news__item__link" href="#">
                                <h3>Kitchen Assistant</h3>
                                <p>While not happy about losing his long-time starting job, Eli Manning knew there was a
                                    the New York  quarterback if the team got off to a bad start.</p>
                                <Tag type="blue" className="item__tag">Job</Tag>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="news__item__link" href="#">
                                <h3>Cook job</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi atque
                                    blanditiis cum debitis, delectus dolorem exercitationem facer.</p>
                                <Tag type="purple" className="item__tag">News</Tag>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="news__item__link" href="#">
                                <h3>Cook job</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi atque
                                    blanditiis cum debitis, delectus dolorem exercitationem facer.</p>
                                <Tag type="green" className="item__tag">Recipe</Tag>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="news__item__link" href="#">
                                <h3>Cook job</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi atque
                                    blanditiis cum debitis, delectus dolorem exercitationem facer.</p>
                                <Tag type="purple" className="item__tag">News</Tag>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="news__item__link" href="#">
                                <h3>Cook job</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi atque
                                    blanditiis cum debitis, delectus dolorem exercitationem facere</p>
                                <Tag type="purple" className="item__tag">News</Tag>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="news__item__link" href="#">
                                <h3>Cook job</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi atque
                                    blanditiis cum debitis, delectus dolorem exercitationem facer.</p>
                                <Tag type="purple" className="item__tag">News</Tag>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="news__item__link" href="#">
                                <h3>Cook job</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi atque
                                    blanditiis cum debitis, delectus dolorem exercitationem facer.</p>
                                <Tag type="purple" className="item__tag">News</Tag>
                            </div>
                        </div>
                        <div className="news__item">
                            <div className="news__item__link" href="#">
                                <h3>Cook job</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi atque
                                    blanditiis cum debitis, delectus dolorem exercitationem facer.</p>
                                <Tag type="purple" className="item__tag">News</Tag>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bx--row">
                </div>
                <div className="news__video">
                    <video autoPlay muted loop className="news__video__src">
                        <source src="/static/video/cookin2.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="news__text-decoration">ANDEAS</div>

            </div>
        );
    }
}

export default News;
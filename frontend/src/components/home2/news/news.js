import React, {Component} from 'react';

import Tag from "carbon-components-react/lib/components/Tag/Tag"

class News extends Component {
    render() {
        return (
            <div className="homepage__section homepage__section--news" id={"news"}>
                <div className="page-title page-title--light">
                    <h2 className="page-title__core page-title--light">
                        News
                    </h2>
                </div>
                <div className="card-group">
                    <div className="card-group__item">
                        <h3 className="item__title">
                            Kitchen Assistant
                        </h3>
                        <p className="item__content">
                            While not happy about losing his long-time starting job, Eli Manning knew there was a the
                            New York quarterback if the team got off to a bad start.
                        </p>
                        <div className="item__tags">
                            <Tag type="blue" className="tag">Job</Tag>
                        </div>
                    </div>
                    <div className="card-group__item">
                        <h3 className="item__title">
                            Kitchen Assistant
                        </h3>
                        <p className="item__content">
                            While not happy about losing his long-time starting job, Eli Manning knew there was a the
                            New York quarterback if the team got off to a bad start.
                        </p>
                        <div className="item__tags">
                            <Tag type="blue" className="tag">Job</Tag>
                        </div>
                    </div>
                    <div className="card-group__item">
                        <h3 className="item__title">
                            Kitchen Assistant
                        </h3>
                        <p className="item__content">
                            While not happy about losing his long-time starting job, Eli Manning knew there was a the
                            New York quarterback if the team got off to a bad start.
                        </p>
                        <div className="item__tags">
                            <Tag type="blue" className="tag">Job</Tag>
                        </div>
                    </div>

                </div>
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
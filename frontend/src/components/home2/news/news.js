import React, {Component} from 'react';

import SingleNews from "./singlenews";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }

    }

    componentDidMount() {
        fetch("api/core/news-item/")
            .then(res => res.json())
            .then((data) => {
                this.setState({data: data})
            })
    }

    render() {
        return (
            <div className="homepage__section homepage__section--news" id={"news"}>
                <div className="page-title page-title--light">
                    <h2 className="page-title__core page-title--light">
                        News
                    </h2>
                </div>
                <div className="card-group">
                    {
                        this.state.data.map(function (data) {
                            return <SingleNews item={data} key={data.id}/>
                        })
                    }
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
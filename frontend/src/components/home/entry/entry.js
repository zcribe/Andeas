import React, {Component} from 'react';

import ModalWrapper from "carbon-components-react/lib/components/Button/Button";
import UnorderedList from "carbon-components-react/lib/components/UnorderedList/UnorderedList";
import ListItem from "carbon-components-react/lib/components/ListItem/ListItem";

class Entry extends Component {
    render() {
        return (
            <div className="bx--col-lg-12 entry">
                <div className="entry__video">
                    <video autoPlay muted loop className="video__vid">
                        <source className="video__vid__src" src="/static/video/champagne.mp4" type="video/mp4"/>
                    </video>
                </div>


                <div className="bx--row">
                    <div className="bx--col-md-4">
                        <section className="entry__brand"><img src="/static/img/twitter_header_photo_1.png" alt="andeas brand"/></section>
                    </div>
                </div>
                <div className="bx--row">
                    <div className="bx--col-lg-3 call-to-action">
                        <ModalWrapper

                        >Reserve a table</ModalWrapper>
                    </div>
                </div>

                <div className="bx--row">
                    <div className="bx--offset-lg-10 bx--col-lg-2">
                        <UnorderedList className="nav-list entry__navbar">
                            <ListItem><a href="#location">Hours & Location</a></ListItem>
                            <ListItem><a href="#menu">Read our menu</a></ListItem>
                            <ListItem><a href="#">Catering services</a></ListItem>
                            <ListItem><a href="#">Contact us</a></ListItem>
                            <ListItem><a href="#news">Read news</a></ListItem>
                        </UnorderedList>
                    </div>
                </div>
                <div className="bx--row entry__text">
                    <div className="bx--col-lg-12">
                        <h1 className="entry__title">ANDEAS</h1>
                        <p className="entry__subtext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
                            fuga
                            neque odit quos, veniam voluptatum? Aspernatur at consequatur culpa ducimus eum, hic in
                            obcaecati sed. Atque dolorem fugiat natus repellat.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Entry;
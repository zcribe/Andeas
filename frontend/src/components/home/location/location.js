import React, {Component} from 'react';

import Button from "carbon-components-react/lib/components/Button/Button";
import UnorderedList from "carbon-components-react/lib/components/UnorderedList/UnorderedList";
import ListItem from "carbon-components-react/lib/components/ListItem/ListItem";
import Icon from "carbon-components-react/lib/components/Icon";

import Map from "pigeon-maps";


class Location extends Component {

    render() {
        return (
            <div className="location">
                {/*<div className="location__bg"></div>*/}
                <div className="location__text-decoration">ANDEAS</div>
                <div className="bx--row">
                    <div className="bx--col-lg-5 location__title">
                        <h2 className="location__title__core">Hours & Location</h2>
                    </div>
                    <div className="bx--col-lg-2  location__lists">
                        <h5 className="lists__title">Location</h5>
                        <UnorderedList>
                            <ListItem>Asma tee 43</ListItem>
                            <ListItem>Tartu, Estonia</ListItem>
                        </UnorderedList>
                    </div>
                    <div className="bx--col-lg-2  location__lists">
                        <h5 className="lists__title">Hours</h5>
                        <UnorderedList>
                            <ListItem>M-T 11:00-23:00</ListItem>
                            <ListItem>F-S 11:00-24:00</ListItem>
                            <ListItem>S Closed</ListItem>
                        </UnorderedList>
                    </div>
                    <div className="bx--col-lg-2 location__lists">
                        <h5 className="lists__title">Parking</h5>
                        <UnorderedList>
                            <ListItem>Nara tee 2 (3€/h)</ListItem>
                            <ListItem>Meeoru 53 (1€/h)</ListItem>
                            <ListItem>Viisi 2 parkimismaja (5€/h)</ListItem>
                        </UnorderedList>
                    </div>
                </div>
                <div className="bx--row">
                    <div className="bx--col-lg-5 location__extras">
                        <Button className="location__reserve">Reserve a table</Button>
                        <h4>Follow us</h4>
                        <div className="location__social">
                            <Button className="bx--btn--ghost">Facebook</Button>
                            <Button className="bx--btn--ghost">Instagram</Button>
                            <Button className="bx--btn--ghost">Tik-Tok</Button>
                        </div>
                    </div>
                    <div className="bx--col-lg-4">
                        <Map center={[58.38062, 26.72509]} zoom={12} width={600} height={400}
                             boxClassname="location__map">
                        </Map>
                    </div>
                </div>


            </div>
        );
    }
}

export default Location;
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    ListItem,
    UnorderedList,
    Form,
    TextInput,
    TextArea,
    Button
} from "carbon-components-react";

import "./components/contact/contact.scss"

class Contact extends Component {
    render() {
        return (
            <div className="homepage__section homepage__section--menu contact" id={"contact"}>
                <div className="page-title page-title--dark">
                    <h2 className="page-title__core page-title__core--dark">
                        Contact us
                    </h2>
                </div>
                <Breadcrumb className={"contact__breadcrumbs"} noTrailingSlash={true}>
                    <BreadcrumbItem href={"/"}>
                        Homepage
                    </BreadcrumbItem>
                    <BreadcrumbItem href={"/contact-us"} isCurrentPage={true}>
                        Contact us
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="contact__info">
                    <div className="info__group">
                        <div className="info__item info__item--1">
                            <h4>Office</h4>
                            <UnorderedList>
                                <ListItem>Alustuse 6, Tartu</ListItem>
                                <ListItem>+372 432424242</ListItem>
                                <ListItem>info@andeas.ee</ListItem>
                            </UnorderedList>
                        </div>
                        <div className="info__item info__item--2">
                            <h4>Hours</h4>
                            <UnorderedList>
                                <ListItem>M-T 11:00-23:00</ListItem>
                                <ListItem>F-S 11:00-24:00</ListItem>
                                <ListItem>S Closed</ListItem>
                            </UnorderedList>
                        </div>

                    </div>

                </div>
                <div className="contact__form">
                    <Form>
                        <TextInput labelText={"Name"} id={"name"} className={"form__item"} helperText={"Who you are."}/>
                        <TextInput labelText={"Email"} id={"email"} className={"form__item"} helperText={"How do we contact you."}/>
                        <TextInput labelText={"Phone"} id={"phone"} type={"number"} className={"form__item"} helperText={"How do we contact you."}/>
                        <TextInput labelText={"Write Andeas in here"} id={"check"} className={"form__item"} helperText={"Helps us avoid robots."}/>
                        <TextArea labelText={"Message"} id={"message"} className={"form__item"} helperText={"What do you want to ask?"}/>
                        <Button className={"form__item form__submit"}>Send us a message</Button>
                    </Form>
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

export default Contact;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Contact/>, wrapper) : null;
import React, {Component} from 'react';
import ReactDOM from "react-dom";

import Form from "carbon-components-react/lib/components/Form/Form";
import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    DatePicker,
    DatePickerInput,
    NumberInput,
    SelectItem,
    TextInput,
    TimePickerSelect
} from "carbon-components-react"

import "./components/reserve/reserve.scss"


class Reserve extends Component {
    render() {
        return (
            <div className="homepage__section homepage__section--menu" id={"reserve"}>
                <div className="page-title page-title--dark">
                    <h2 className="page-title__core page-title__core--dark">
                        Reserve a table
                    </h2>
                </div>
                <Breadcrumb className={"reserve__breadcrumbs"} noTrailingSlash={true}>
                    <BreadcrumbItem href={"/"}>
                        Homepage
                    </BreadcrumbItem>
                    <BreadcrumbItem href={"/reserve-a-table"} isCurrentPage={true}>
                        Reserve a table
                    </BreadcrumbItem>
                </Breadcrumb>
                <Form className={"reserve__form"}>
                    <div className={"form__reservation"}>
                        <h3>Reservation information</h3>
                        <NumberInput min={1} max={10} value={1} label={"Number of people"} id={"people"}
                                     className={"form__item form__people"}/>
                        <DatePicker placeholder={"dd/mm/yyyy"} datePickerType="single"
                                    className={"form__item form__date"}>
                            <DatePickerInput labelText={"Day of reservation"} id={"date"}/>
                        </DatePicker>

                        <TimePickerSelect labelText={"Time"} className={"form__time form__item"} hideLabel={false}
                                          id={"time"}>
                            <SelectItem text={"18:00"} value={18}/>
                            <SelectItem text={"19:00"} value={19}/>
                            <SelectItem text={"20:00"} value={20}/>
                            <SelectItem text={"21:00"} value={21}/>
                            <SelectItem text={"22:00"} value={22}/>
                        </TimePickerSelect>
                    </div>
                    <div className={"form__personal"}>
                        <h3>Contact information</h3>
                        <TextInput labelText={"Name"} className={"form__item"} type={"text"} placeholder={"Mari Mets"}
                                   id={"name"} helperText={"Who do we let in."}/>
                        <TextInput labelText={"Email"} className={"form__item"} type={"string"}
                                   placeholder={"mina@gmail.com"} id={"email"}
                                   helperText={"Where to send the confirmation."}/>
                        <TextInput labelText={"Phone"} className={"form__item"} type={"number"} placeholder={"53559422"}
                                   id={"phone"} helperText={"Where do we contact you."}/>
                        <TextInput labelText={"Write Andeas here"} className={"form__item"} placeholder={"Andeas"}
                                   id={"check"} helperText={"Lets us avoid bots."}/>
                        <Button type={"submit"} className={"form__submit"}>Send us your request</Button>
                    </div>
                    {/*<Button type="submit" className="some-class">*/}
                    {/*    Submit*/}
                    {/*</Button>*/}

                </Form>


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

export default Reserve;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Reserve/>, wrapper) : null;
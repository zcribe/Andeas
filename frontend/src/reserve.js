import React, {Component} from 'react';
import ReactDOM from "react-dom";

import Form from "carbon-components-react/lib/components/Form/Form";
import {Breadcrumb, BreadcrumbItem, ProgressIndicator, ProgressStep} from "carbon-components-react"
import Button from "carbon-components-react/lib/components/Button/Button";


import "./components/reserve/reserve.scss"
import StageOne from "./components/reserve/stageOne";
import StageTwo from "./components/reserve/stageTwo";
import StageThree from "./components/reserve/stageThree";
import Messages from "./components/reserve/messages";


class Reserve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            people: 2,
            date: "",
            time: "",
            name: "",
            email: "",
            phone: "",
            check: "",
            table: 0,
            sendConfirm: "unchecked",
            reminder: true,
            formInvalid: false,
            messages: []
        };


        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);

        this.submitButton = this.submitButton.bind(this);
        this.addMessage = this.addMessage.bind(this);

    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleRadioChange(value) {
        this.setState({
            people: value
        })
    }

    handleDateChange(value) {
        this.setState({
            date: value[0]
        })
    }

    handleTimeChange(value) {
        this.setState({
            time: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const {name, email, phone, people, reminder, table,} = this.state;
        const lead = {name, email, phone, people, reminder, table,};
        const conf = {
            method: "post",
            body: JSON.stringify(lead),
            headers: new Headers({"Content-Type": "application/json"})
        };
        fetch("http://127.0.0.1:8000/api/reservations/reservation/", conf).then(
            response => {
                if (response.status !== 201) {
                    return this.addMessage("error", response.status.toString(), response.statusText)
                }
                return this.addMessage("success", "Success", "We have reserved a table for you!")
            }
        )
    };

    _next() {
        let currentStep = this.state.currentStep;
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep > 2 ? 3 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        })
    }

    _prev() {
        let currentStep = this.state.currentStep;
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        })
    }

    // The "next" and "previous" button functions
    previousButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 1, then render the "previous" button
        if (currentStep !== 1) {
            return (

                <Button
                    className="bx--btn bx--btn--secondary"
                    type="button" onClick={this._prev}>
                    Previous
                </Button>
            )
        }
        // ...else return nothing
        return null;
    }

    nextButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 3) {
            return (
                <Button
                    className="bx--btn bx--btn--primary"
                    type="button" onClick={this._next}>
                    Next
                </Button>
            )
        }
        // ...else render nothing
        return null;
    }

    submitButton() {
        let currentStep = this.state.currentStep;
        if (currentStep === 3) {
            return (
                <Button
                    type={"submit"}
                    className={""}
                >
                    Reserve a table
                </Button>
            )
        }
        return null;
    }

    addMessage(kind, title, subtitle) {
        this.setState(previousState => ({
        messages: [...previousState.messages, {
        title: title,
        kind: kind,
        subtitle:subtitle
    }]
    }));

        // let messages = this.state.messages;
        // let message = <ToastNotification
        //     title={title}
        //     kind={kind}
        //     subtitle={subtitle}
        //     timeout={10000}
        // />;
        //
        // messages.push(message);
        //
        // const item = document.getElementById("messages");
        // ReactDOM.render(messages, item)
    }



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
                <div className={"reserve__progress"}>
                    <ProgressIndicator
                        currentIndex={this.state.currentStep - 1}

                    >
                        <ProgressStep
                            label={"1: Reserve"}
                            description={"Step 1: The date and time"}
                            secondaryLabel={"When?"}

                        />
                        <ProgressStep
                            label={"2: Contact"}
                            description={"Step 2: Contact information"}
                            secondaryLabel={"Who do we let in?"}


                        />
                        <ProgressStep
                            label={"3: Review"}
                            description={"Step 3: Review & Confirm"}
                            secondaryLabel={"Let's make sure."}


                        />
                    </ProgressIndicator>
                </div>
                <React.Fragment>
                    <Form
                        onSubmit={this.handleSubmit}
                        className={"reserve__form"}
                        i={"reserve"}
                    >
                        <StageOne
                            currentStep={this.state.currentStep}
                            handleRadio={this.handleRadioChange}
                            handleDate={this.handleDateChange}
                            handleTime={this.handleTimeChange}
                            people={this.state.people}
                            date={this.state.date}
                            time={this.state.time}

                        />
                        <StageTwo
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            name={this.state.name}
                            email={this.state.email}
                            phone={this.state.phone}
                            check={this.state.check}
                        />
                        <StageThree
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            name={this.state.name}
                            email={this.state.email}
                            phone={this.state.phone}
                            check={this.state.check}
                            people={this.state.people}
                            date={this.state.date}
                            time={this.state.time}
                            sendConfirmation={this.state.sendConfirm}
                        />
                        <div className={"reserve__progress-navs"}>
                            {this.previousButton()}
                            {this.nextButton()}
                            {this.submitButton()}
                        </div>
                    </Form>
                </React.Fragment>

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
                <Messages
                    id={"messages"}
                    messages={this.state.messages}
                >
                </Messages>
            </div>
        );
    }
}

export default Reserve;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Reserve/>, wrapper) : null;
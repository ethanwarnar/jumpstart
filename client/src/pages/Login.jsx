import React, { Component } from "react";
import { render } from "react-dom";
import { StudentLanding, RecruiterLanding } from '../components'
import styled from 'styled-components'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Col,
    Row,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    FormGroup,
    Label,
    CustomInput
} from 'reactstrap';

const Container = styled.div.attrs({
    className: 'container',
})
    `
`

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            showStudentLanding: false,
            showRecruiterLanding: false,
        };
        this.showComponent = this.showComponent.bind(this);
    }

    showComponent(name) {
        console.log(name);
        switch (name) {
            case "studentLanding":
                this.setState({
                    showStudentLanding: true,
                    showRecruiterLanding: false
                });
                break;
            case "recruiterLanding":
                this.setState({
                    showRecruiterLanding: true,
                    showStudentLanding: false
                });
                break;
            default:
                break;
        }
    }

    render() {
        const { showStudentLanding, showRecruiterLanding } = this.state;
        return (
            <Container>

                <Card style={{ margin: "15px" }}>
                    <CardBody>
                        <CardText style={{ fontSize: "20px", textAlign: "center" }}>Welcome!!</CardText>
                            <div style={{textAlign: 'center'}}>
                                <Button
                                    style={{ fontSize: "15px", margin: "5px" }} 
                                    onClick={() => this.showComponent("studentLanding")}>
                                    Student
                                </Button>

                                <Button 
                                    style={{ fontSize: "15px", margin: "5px" }} 
                                    onClick={() => this.showComponent("recruiterLanding")}>
                                    Recruiter
                                </Button>
                            </div>

                    </CardBody>
                </Card>



                <div>
                    {showStudentLanding && <StudentLanding />}
                    {showRecruiterLanding && <RecruiterLanding />}
                </div>
            </Container>
        );
    }
}


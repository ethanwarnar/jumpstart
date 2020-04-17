import React, { Component } from "react";
import { render } from "react-dom";
import { StudentLanding, RecruiterLanding } from '../components'
import styled from 'styled-components'
import logo from '../logo.jpg'
import { connect } from 'react-redux'


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

import { isStudent, isProfessional } from '../redux/actions.js'
const Container = styled.div.attrs({
    className: 'container',
})
    `
`
const NavContainer = styled.div.attrs({
    className: 'container',
})`height:75px`


const mapStateToProps = state => {
    const { dashboard } = state
    return {
        isStudent: dashboard.isStudent,
        isProfessional: dashboard.isProfessional
    }
}

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "React",
            showStudentLanding: true,
            showRecruiterLanding: false,
        };
        this.showComponent = this.showComponent.bind(this);
    }

    showComponent(name) {
        switch (name) {
            case "studentLanding":
                this.props.updateStudent(true)
                this.props.updateProfessional(false)
                this.setState({
                    showStudentLanding: true,
                    showRecruiterLanding: false
                });
                break;
            case "recruiterLanding":
                this.props.updateProfessional(true)
                this.props.updateStudent(false)
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
        console.log("Student", this.props.isStudent)
        console.log("Professional", this.props.isProfessional)
        const { showStudentLanding, showRecruiterLanding } = this.state;
        return (
            <React.Fragment>
                <Container>
                    <Navbar style={{ backgroundColor: "#FFF3E2" }} fixed="top" light expand="md">
                        <NavContainer>
                            <Col sm>
                                <NavbarBrand href="/">
                                    <img
                                        style={{ marginRight: "20px" }}
                                        alt=""
                                        src={logo}
                                        width="50"
                                        height="50"
                                    />{'  '}
                                    Macchiato
                        </NavbarBrand>
                            </Col>
                            <Col >
                                <Nav style={{ backgroundColor: '#00000' }} className="mr-auto right" navbar>
                                    <Col sm="3"></Col>
                                    <Button
                                        style={{
                                            color: "black",
                                            borderColor: "#fff3e2",
                                            backgroundColor: "#fff3e2",
                                            width: "175px",
                                            fontSize: "15px",
                                            margin: "25px"
                                        }}
                                        onClick={() => this.showComponent("studentLanding")}>
                                        Student
                                    </Button>
                                    <Button
                                        style={{
                                            color: "black",
                                            borderColor: "#fff3e2",
                                            backgroundColor: "#fff3e2",
                                            width: "175px",
                                            fontSize: "15px",
                                            margin: "25px"
                                        }}
                                        onClick={() => this.showComponent("recruiterLanding")}>
                                        Professionals
                                    </Button>
                                    <Button color="secondary"
                                        style={{ color: "black", backgroundColor: "#FFA824", borderColor: "#FFA824", width: "175px", fontSize: "15px", margin: "25px" }}
                                        onClick={() => this.showComponent("recruiterLanding")}>
                                        Login
                                    </Button>

                                </Nav>
                            </Col>
                        </NavContainer>
                    </Navbar>

                </Container>


                <Container>
                    <div>
                        {showStudentLanding && <StudentLanding />}
                        {showRecruiterLanding && <RecruiterLanding />}
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStudent: (bool) => dispatch(isStudent(bool)),
        updateProfessional: (bool) => dispatch(isProfessional(bool))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
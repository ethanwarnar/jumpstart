import React, { Component, useState } from "react";
import { render } from "react-dom";
import { StudentLanding, RecruiterLanding } from '../components'
import styled from 'styled-components'
import logo from '../logo.png'
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
    CustomInput,
    ButtonGroup
} from 'reactstrap';

import { MdLocalCafe, MdAdd } from "react-icons/md"


import { isStudent, isProfessional } from '../redux/actions.js'
const Container = styled.div.attrs({
    className: 'container',
})
    `
`
const NavContainer = styled.div.attrs({
    className: 'container',
})``


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
            isOpen: false,
            setIsOpen: false
        };
        this.showComponent = this.showComponent.bind(this);
    }

    componentWillMount() {
        this.props.isLoggedIn(false)
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
                <NavContainer>

                    <Navbar style={{ backgroundColor: "#FFF3E2" }} fixed="top" light expand="md">
                        <Container>
                            {/* <Col sm="1" /> */}
                            <NavbarBrand style={{ fontFamily:"Poppins', sans-serif;",fontSize: "23px" }} href="/">
                                <MdLocalCafe style={{ transform: "scaleX(-1)", width: "45", height: "45" }} />
                                <MdAdd style={{ color: "#FFA824", height: "25px", width: "25px" }} />
                                <MdLocalCafe style={{ width: "45", height: "45", marginRight: "20px" }} />
                                Macchiato
                                </NavbarBrand>
                            <NavbarToggler onClick={() => this.setState({ isOpen: !this.state.isOpen })} />

                            <Collapse style={{ textAlign: "center" }} isOpen={this.state.isOpen} navbar>

                                <Col >
                                    <Nav style={{ backgroundColor: '#00000' }} className="mr-auto right" navbar>
                                        <Col sm="7"></Col>
                                        <ButtonGroup >
                                            <button
                                                autofocus
                                                className="nav-button"
                                                style={{
                                                    borderColor: "#fff3e2",
                                                    backgroundColor: "#fff3e2",
                                                    width: "125px",
                                                    fontSize: "18px",
                                                    outline: "none",
                                                    margin: "5px 25px"
                                                }}
                                                onClick={() => this.showComponent("studentLanding")}>
                                                Students
                                            </button>
                                            <button
                                                className="nav-button"
                                                style={{
                                                    borderColor: "#fff3e2",
                                                    backgroundColor: "#fff3e2",
                                                    width: "125px",
                                                    fontSize: "18px",
                                                    margin: "5px 25px",
                                                    outline: "none"
                                                }}
                                                onClick={() => this.showComponent("recruiterLanding")}>
                                                Professionals
                                    </button>
                                        </ButtonGroup>
                                        {/* <Button color="secondary"
                                            style={{ color: "black", backgroundColor: "#FFA824", borderColor: "#FFA824", width: "125px", fontSize: "17px", margin: "5px 25px" }}
                                            onClick={() => this.showComponent("recruiterLanding")}>
                                            Login
                                        </Button> */}

                                    </Nav>
                                </Col>
                            </Collapse>
                        </Container>
                    </Navbar>
                </NavContainer>
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
        updateProfessional: (bool) => dispatch(isProfessional(bool)),
        isLoggedIn: (bool) => dispatch({ type: "IS_LOGGED_IN", payload: bool })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
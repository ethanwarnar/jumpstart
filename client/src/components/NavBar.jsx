import React, { useState, Component } from 'react'
import styled from 'styled-components'

// import Logo from './Logo'
import Links from './Links'
import logo from '../logo.jpg'
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
    Button
} from 'reactstrap';

import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"


import '../style/main.scss'

import { MdLocalCafe, MdDashboard, MdEvent, MdAccountCircle, MdGroup, MdAdd } from "react-icons/md"

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
        state: dashboard,
        isStudent: dashboard.isStudent,
        isProfessional: dashboard.isProfessional,
        firstName: dashboard.student.firstName,
        isLoggedIn: dashboard.isLoggedIn,
        eventArray: dashboard.eventArray.array
    }
}
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "React",
            isOpen: false,
            setIsOpen: false
        };
    }



    render() {

        if (this.props.isLoggedIn == false) {
            return <Redirect to='/' />
        }
        return (

            <NavContainer>

                <Navbar style={{ backgroundColor: "#FFF3E2" }} fixed="top" light expand="md">
                    <Container>
                        <Col sm="1" />

                        <NavbarBrand style={{ fontSize: "23px" }} href="/macchiato/dashboard">
                            <MdLocalCafe style={{ transform: "scaleX(-1)", width: "45", height: "45" }} />
                            <MdAdd style={{ color: "#FFA824", height: "25px", width: "25px" }} />
                            <MdLocalCafe style={{ width: "45", height: "45", marginRight: "20px" }} />
                            Macchiato
                        </NavbarBrand>
                        <NavbarToggler onClick={() => this.setState({ isOpen: !this.state.isOpen })} />

                        {/* </Col> */}
                        <Collapse style={{ textAlign: "center" }} isOpen={this.state.isOpen} navbar>

                            <Col >
                                <Nav style={{ backgroundColor: '#00000' }} className="mr-auto right" navbar>
                                    {/* <div style={{ width: "30vh" }} /> */}
                                    <Col sm="0.5"></Col>

                                    <NavItem style={{ margin: "0px 25px " }}>
                                        <MdDashboard href="/macchiato/dashboard" style={{ width: "30", height: "30" }} />
                                        <NavLink style={{ fontSize: "17px" }} href="/macchiato/dashboard">Dashboard</NavLink>
                                    </NavItem>
                                    <NavItem style={{ margin: "0px 25px " }}>
                                        <MdEvent href="/macchiato/resources" style={{ width: "30", height: "30" }} />

                                        <NavLink style={{ fontSize: "17px" }} href="/macchiato/resources">Events</NavLink>
                                    </NavItem>
                                    <NavItem style={{ margin: "0px 25px " }}>
                                        <MdGroup href="/macchiato/chat" style={{ width: "30", height: "30" }} />
                                        <NavLink style={{ fontSize: "17px" }} href="/macchiato/chat">Networking</NavLink>
                                    </NavItem>
                                    <NavItem style={{ margin: "0px 25px " }}>
                                        <MdAccountCircle style={{ width: "30", height: "30" }} />
                                        <NavLink style={{ fontSize: "17px" }} href="/macchiato/profile">Profile</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <Button color="secondary"
                                            style={{ color: "black", backgroundColor: "#FFA824", borderColor: "#FFA824", fontSize: "17px", width: "100px", margin: "15px 25px" }}
                                            onClick={() => (this.props.setLoggedIn())}
                                        >
                                            Log-out
                                    </Button>

                                    </NavItem>


                                </Nav>
                            </Col>
                        </Collapse>
                    </Container>
                </Navbar>
            </NavContainer>


        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedIn: () => dispatch({ type: "IS_LOGGED_IN", payload: false })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar) 
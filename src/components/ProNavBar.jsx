import React, { useState, Component } from 'react'
import styled from 'styled-components'

// import Logo from './Logo'
import Links from './Links'
import logo from '../logo.png'
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

import { MdPerson, MdLocalCafe, MdDashboard, MdEvent, MdAccountCircle, MdGroup, MdAdd } from "react-icons/md"

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
class ProNavBar extends Component {
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
                                    <Col sm="4"></Col>

                                    <NavItem style={{ margin: "0px 25px " }}>
                                        <MdDashboard href="/macchiato/dashboard" style={{ width: "30", height: "30" }} />
                                        {/* <NavLink style={{ textDecoration: "none",fontSize: "17px" }} href="/macchiato/dashboard">Dashboard</NavLink> */}
                                        <a className="nav-button" style={{ textDecoration: "none", fontSize: "17px" }} href="/macchiato/dashboard">Dashboard</a>

                                    </NavItem>
                                    <NavItem style={{ margin: "0px 25px " }}>
                                        <MdEvent href="/macchiato/resources" style={{ width: "30", height: "30" }} />
                                        {/* <NavLink style={{ fontSize: "17px" }} href="/macchiato/resources">Events</NavLink> */}
                                        <a className="nav-button" style={{ textDecoration: "none", fontSize: "17px" }} href="/macchiato/resources">Events</a>

                                    </NavItem>
                                    <NavItem style={{ margin: "0px 25px " }}>
                                        <MdPerson style={{ width: "30", height: "30" }} />
                                        {/* <NavLink style={{ fontSize: "17px" }} href="/macchiato/profile">Profile</NavLink> */}
                                        <a className="nav-button" style={{ textDecoration: "none", fontSize: "17px" }} href="/macchiato/profile">Profile</a>

                                    </NavItem>
                                    <NavItem>
                                    <button className="button"
                                            style={{ fontSize: "17px", marginLeft:"30px",margin: "10px", color: "black", borderColor: "#FFA824", width: "100px" }}

                                            // style={{ color: "black", backgroundColor: "#FFA824", borderColor: "#FFA824", fontSize: "17px", width: "100px", margin: "15px 25px" }}
                                            onClick={() => (this.props.setLoggedIn())}
                                        >
                                            Log-out
                                    </button>

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
)(ProNavBar) 
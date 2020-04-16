import React, { useState, Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
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
    Row
} from 'reactstrap';

import '../style/main.scss'

const Container = styled.div.attrs({
    className: 'container-fullwidth',
})
`
margin-bottom:75px;
`
const NavContainer = styled.div.attrs({
    className: 'container',
})`height:75px`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Navbar  style={{backgroundColor:"#FFF3E2"}} fixed="top"  light expand="md">
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
                            <Nav style={{backgroundColor: '#00000'}} className="mr-auto right" navbar>
                            <NavItem style={{ margin: "25px" }}>
                                    <NavLink href="/jumpstart/home">Dashboard</NavLink>
                                </NavItem>
                                <NavItem style={{ margin: "25px" }}>
                                    <NavLink href="/jumpstart/resources">Events</NavLink>
                                </NavItem>
                                <NavItem style={{ margin: "25px" }}>
                                    <NavLink href="/jumpstart/chat">Networking</NavLink>
                                </NavItem>
                                <NavItem style={{ margin: "25px" }}>
                                    <NavLink href="/jumpstart/profile">Profile</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </NavContainer>
                </Navbar>

            </Container>
        );
    }
}


export default NavBar
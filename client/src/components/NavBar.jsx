import React, { useState, Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'
import logo from '../logo.svg'
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

const Container = styled.div.attrs({
    className: 'container-fullwidth',
})
    `
margin-bottom:105px;
`
const NavContainer = styled.div.attrs({
    className: 'container',
})`height:60px`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Navbar fixed="top" color="light" light expand="md">
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
                                Jumpstart
                        </NavbarBrand>
                        </Col>
                        <Col >
                            <Nav className="mr-auto right" navbar>
                                <NavItem style={{ margin: "25px" }}>
                                    <NavLink href="/jumpstart/survey">Survey</NavLink>
                                </NavItem>
                                <NavItem style={{ margin: "25px" }}>
                                    <NavLink href="/jumpstart/jobs">Jobs</NavLink>
                                </NavItem>
                                <NavItem style={{ margin: "25px" }}>
                                    <NavLink href="/jumpstart/chat">Chat</NavLink>
                                </NavItem>
                                <NavItem style={{ margin: "25px" }}>
                                    <NavLink href="/jumpstart/resources">Resources</NavLink>
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
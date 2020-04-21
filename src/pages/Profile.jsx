import React, { Component } from 'react'
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
    CustomInput,
    Input,
    Form,
    FormText
} from 'reactstrap';

import { NavBar } from '../components'

const Container = styled.div.attrs({
    className: 'container',
})
    `
`

class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Container>
                    <Row>

                        <Card style={{ margin: "75px 0px 0px" }}>
                            <CardBody>
                                <CardText style={{ fontSize: "20px", textAlign: "center" }}>Profile Page</CardText>

                            </CardBody>
                        </Card>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Profile
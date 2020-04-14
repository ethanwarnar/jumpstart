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

const Container = styled.div.attrs({
    className: 'container',
})
    `
`

class Profile extends Component {
    render() {
        return (
            <Container>
                <Card style={{ margin: "15px" }}>
                <CardBody>
                    <CardText style={{ fontSize: "20px", textAlign: "center" }}>Profile Page</CardText>
                
                
                </CardBody>
            </Card>
            </Container>
        )
    }
}

export default Profile
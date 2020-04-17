import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar } from '../components'
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
class Chat extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Container>
                    <Row>
                    <Card style={{margin: "75px 0px 0px"}}>
                        <p>In this page you'll see the chat interface</p>
                    </Card>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Chat
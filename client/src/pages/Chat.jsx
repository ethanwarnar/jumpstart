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
                        <Card style={{ margin: "75px 0px 0px" }}>
                            <iframe style={{ border: "none", height: "600px", width: "100%"}} src="https://success.zoom.us/wc/78354189714/join?prefer=1&un={base64encodedName}" sandbox="allow-forms allow-scripts allow- same-origin " allow=" microphone; camera "> </iframe>                    </Card>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Chat
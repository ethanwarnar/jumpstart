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
    CardHeader,
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
                        {/* body outline style={{ borderRadius: "18px", justifyContent: "center", height: "80px", borderColor: "#FFA824", margin: "16vh 0px 0px", borderWidth: "3px" }} */}
                        <Col sm="4">
                            <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "16vh 0px 0px", }}>
                                <CardHeader>Test</CardHeader>
                                <div style={{ height: "500px" }}>
                                    <iframe
                                        src="https://calendly.com/ethanwarnar/"
                                        width="100%"
                                        height="95%"
                                        frameborder="0"
                                    ></iframe>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "16vh 0px 0px", }}>
                                <CardHeader>Test</CardHeader>
                                <div style={{ height: "500px" }}>
                                    <iframe
                                        src="https://calendly.com/ethanwarnar/"
                                        width="100%"
                                        height="95%"
                                        frameborder="0"
                                    ></iframe>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "16vh 0px 0px", }}>
                                <CardHeader>Test</CardHeader>
                                <div style={{ height: "500px" }}>
                                    <iframe
                                        src="https://calendly.com/ethanwarnar/"
                                        width="100%"
                                        height="95%"
                                        frameborder="0"
                                    ></iframe>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Chat
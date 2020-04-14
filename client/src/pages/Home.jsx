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
    CustomInput
} from 'reactstrap';

import { Calendar } from '../components'

const Container = styled.div.attrs({
    className: 'container',
})
`
`

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm>
                        <Card style={{ margin: "15px" }} >
                            <CardBody>
                                <CardText style={{ fontSize: "20px", textAlign: "center" }}>Welcome back Seoyoon!</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card style={{ margin: "15px" }}>
                            <CardBody>
                                <CardText style={{ fontSize: "20px", textAlign: "center" }}>7 New Workshop Matches </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm>
                        <Card style={{ margin: "15px" }}>
                            <CardBody>
                                <CardText style={{ fontSize: "20px", textAlign: "center" }}>3 New Messages</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="4">
                    </Col>
                    <Col sm="8">
                        <Card style={{ margin: "15px" }}>
                            <CardBody >
                                {/* <CardText style={{ fontSize: "20px", textAlign: "center" }}>Calendar</CardText> */}
                                <Calendar />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home
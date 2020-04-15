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

import { Calendar, NavBar } from '../components'

const Container = styled.div.attrs({
    className: 'container',
})
    `
`

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
            <Container>
                <Row>
                    <Col sm="6">
                        <Card body outline style={{ borderColor: "#FFA824", margin: "75px 0px 0px" }} >
                            <CardBody>
                                <CardText style={{ fontSize: "20px", textAlign: "center" }}>Welcome back, Seoyoon!</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card body outline style={{ borderColor: "#FFA824", margin: "75px 0px 0px" }}>
                            <CardBody>
                                <CardText style={{ fontSize: "20px", textAlign: "center" }}>Accepted Events </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card body outline style={{ borderColor: "#FFA824", margin: "75px 0px 0px" }}>
                            <CardBody>
                                <CardText style={{ fontSize: "20px", textAlign: "center" }}>New Messages</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">

                        <Card body outline style={{ borderColor: "#FFA824", margin: "50px 0px 50px" }} >
                            <CardBody>
                                <CardText style={{ fontSize: "20px", textAlign: "center" }}>
                                    Your event How to Break into Product Management <br />
                                    is in 2 days with Jessica McKenzie
                                </CardText>
                            </CardBody>
                        </Card>
                        <Card body outline style={{ borderColor: "#FFA824", margin: "50px 0px 50px" }} >
                            <CardBody>
                                <CardText style={{ fontSize: "20px", textAlign: "center" }}>
                                    Your coffee chat with Emily Adams in 4 days
                                </CardText>
                            </CardBody>
                        </Card>
                        <Row>
                            <Col sm="4">
                                <Card body inverse style={{ backgroundColor: "#FFA824", height: "130px" }} >
                                    <CardTitle style={{ fontSize: "30px", textAlign: "center", margin: "0" }}>
                                        7 
                                    </CardTitle>

                                        <CardText style={{ fontSize: "18px", textAlign: "center" }}>
                                            New 
                                            Apps
                                        </CardText>
                                </Card>
                            </Col>

                            <Col sm="4">
                                <Card body inverse style={{ backgroundColor: "#FFA824", height: "130px" }} >
                                    <CardTitle style={{ fontSize: "30px", textAlign: "center", margin: "0" }}>
                                        3 
                                    </CardTitle>
                                    <CardText style={{ fontSize: "18px", textAlign: "center" }}>
                                        Mentees
                                    </CardText>
                                {/* <CardBody>
                                        
                                    </CardBody> */}
                                </Card>
                            </Col>

                        <Col sm="4">
                            <Card body inverse style={{ backgroundColor: "#FFA824", height: "130px" }} >
                            <CardTitle style={{ fontSize: "30px", textAlign: "center", margin: "0" }}>
                                        13 
                                    </CardTitle>
                                    <CardText style={{ fontSize: "18px", textAlign: "center" }}>
                                    
                                            Saved 
                                        Profiles
                                            </CardText>
                            </Card>
                        </Col>
                        </Row>
                    </Col>


                <Col sm="6">
                    <Card body outline style={{ borderColor: "#FFA824", margin: "50px 0px 50px" }}>
                        <CardBody >
                            {/* <CardText style={{ fontSize: "20px", textAlign: "center" }}>Calendar</CardText> */}
                            <Calendar />
                        </CardBody>
                    </Card>
                </Col>
                </Row>
            </Container >
        </React.Fragment>
        )
    }
}

export default Home
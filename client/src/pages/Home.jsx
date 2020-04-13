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
                        {/* <Card style={{ margin: "15px" }}>
                            <CardBody>
                                <FormGroup>
                                    <CardText style={{ fontSize: "20px", textAlign: "center" }}>Daily Tasks</CardText>
                                    <div >
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Browsed new postings" />
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Reached out to employer" />
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Signed up for new event" />
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Updated development goals" />
                                        <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Made new network connection" />
                                    </div>
                                </FormGroup>
                            </CardBody>
                        </Card> */}
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

                <Row>
                    <Col>

                    </Col>
                </Row>
                {/* <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card> */}







            </Container>
        )
    }
}

export default Home
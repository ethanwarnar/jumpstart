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


class Survey extends Component {
    render() {
        return (
            <Container>
                <Card style={{ margin: "15px" }}>
                    <CardBody>
                        <CardText style={{ fontSize: "20px", textAlign: "center" }}>Profile</CardText>
                        <Form>
                            <FormGroup row>
                                <Label for="exampleEmail" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="please enter your email" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="examplePassword" sm={2}>Password</Label>
                                <Col sm={10}>
                                    <Input type="password" name="password" id="examplePassword" placeholder="please enter your password" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleSelect" sm={2}>Sector</Label>
                                <Col sm={10}>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Business</option>
                                        <option>Information Technology</option>
                                        <option>Healthcare</option>
                                        <option>Retail</option>
                                        <option>Education</option>
                                        <option>Government</option>
                                        <option>Real Estate</option>
                                        <option>Other</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
                                <Col sm={10}>
                                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleText" sm={2}>Text Area</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleFile" sm={2}>File</Label>
                                <Col sm={10}>
                                    <Input type="file" name="file" id="exampleFile" />
                                    <FormText color="muted">
                                        This is some placeholder block-level help text for the above input.
                                        It's a bit lighter and easily wraps to a new line.
                                </FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup tag="fieldset" row>
                                <legend className="col-form-label col-sm-2">Radio Buttons</legend>
                                <Col sm={10}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio2" />{' '}
                                            Option one is this and that—be sure to include why it's great
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio2" />{' '}
                                            Option two can be something else and selecting it will deselect option one
                                    </Label>
                                    </FormGroup>
                                    <FormGroup check disabled>
                                        <Label check>
                                            <Input type="radio" name="radio2" disabled />{' '}
                                            Option three is disabled
                                    </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="checkbox2" sm={2}>Checkbox</Label>
                                <Col sm={{ size: 10 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" id="checkbox2" />{' '}
                                            Check me out
                                    </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{ size: 10, offset: 2 }}>
                                    <Button>Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        )
    }
}

export default Survey
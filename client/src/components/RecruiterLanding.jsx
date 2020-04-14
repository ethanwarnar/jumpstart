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
class RecruiterLanding extends Component {
    render() {
        return (
            <Card style={{ margin: "15px" }}>
                <CardBody>
                    <CardText style={{ fontSize: "20px", textAlign: "center" }}>Recruiter Landing</CardText>
                
                
                </CardBody>
            </Card>
        )
    }
}

//sample <code>

{/* <Card style={{ margin: "15px" }}>
        <CardBody>
            <CardText style={{ fontSize: "20px", textAlign: "center" }}>Profile</CardText>
            <Form>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Name</Label>
                    <Col sm={10}>
                        <Input type="text" name="text" id="exampleText" placeholder="please enter your first and last name"/>
                    </Col>
                </FormGroup>

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
                        <Input type="select" name="select" id="exampleSelect" placeholder="please select your desired sector">
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

                <Label for="exampleSelect" sm={2}></Label>
                <Col sm={10}>
                    <FormGroup check inline>

                        <Label check>
                        <Input type="checkbox" /> Student
                        </Label>
                        </FormGroup>
                    <FormGroup check inline>
                        <Label check>
                        <Input type="checkbox" /> Employer
                        </Label>
                    </FormGroup>
                </Col>
                </FormGroup>
                    
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Fun Fact</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="exampleText" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>Résumé</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                    </Col>
                </FormGroup>

                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </CardBody>
    </Card> */}


export default RecruiterLanding
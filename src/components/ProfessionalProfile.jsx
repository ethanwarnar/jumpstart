import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

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

import { getStudentFirstName, isProfessional, isStudent } from '../redux/actions.js'


const Container = styled.div.attrs({
    className: 'container',
})
    `
`

const mapStateToProps = state => {
    const { dashboard } = state
    return {
        state: dashboard,
        isStudent: dashboard.isStudent,
        isProfessional: dashboard.isProfessional,
        firstName: dashboard.student.firstName,
        isLoggedIn: dashboard.isLoggedIn
    }
}

class ProfessionalProfile extends Component {
    constructor(props) {
        super(props);
        this.submitProfile = this.submitProfile.bind(this);
    }

    componentWillMount() {
        this.props.setLoggedIn(false)
    }

    submitProfile() {
        this.props.setLoggedIn(true)
        this.props.updateProfessional(true)
        this.props.updateStudent(false)

    }


    render() {
        if (this.props.isLoggedIn) {
            return <Redirect to='/macchiato/dashboard' />
        }
        return (
            <React.Fragment>
                <div style={{ textAlign: "center" }}>
                    <Form>
                        <FormGroup row>
                            <Label style={{ fontFamily: "'Poppins', sans-serif;", }} for="exampleText" sm={4}>First Name</Label>
                            <Col sm={8} >
                                <Input
                                    style={{ fontFamily: "'Poppins', sans-serif;", }}
                                    type="text"
                                    name="text"
                                    id="exampleText"
                                    placeholder="please enter your first name"
                                    onChange={this.props.updateStudentFirstName}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontFamily: "'Poppins', sans-serif;", }} for="exampleText" sm={4}>Last Name</Label>
                            <Col sm={8} >
                                <Input style={{ fontFamily: "'Poppins', sans-serif;", }} type="text" name="text" id="exampleText" placeholder="please enter your last name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontFamily: "'Poppins', sans-serif;", }} for="exampleEmail" sm={4}>Email</Label>
                            <Col sm={8}>
                                <Input style={{ fontFamily: "'Poppins', sans-serif;", }} type="email" name="email" id="exampleEmail" placeholder="please enter your email" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label style={{ fontFamily: "''Poppins', sans-serif;', sans-serif;", }} for="exampleEmail" sm={4}>Calendly Link</Label>
                            <Col sm={8}>
                                <Input style={{ fontFamily: "'Poppins', sans-serif;", }}type="email" name="email" id="exampleEmail" placeholder="ex. calendly.com/name" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label style={{ fontFamily: "'Poppins', sans-serif;", }} for="exampleEmail" sm={4}>Company</Label>
                            <Col sm={8}>
                                <Input style={{ fontFamily: "'Poppins', sans-serif;", }} type="text" name="email" id="exampleEmail" placeholder="please enter your company name" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label style={{ fontFamily: "'Poppins', sans-serif;", }} for="exampleSelect" sm={4}>Sector</Label>
                            <Col sm={8}>
                                <Input style={{ fontFamily: "'Poppins', sans-serif;", }} type="select" name="select" id="exampleSelect" placeholder="please select your desired sector">
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
                            <Label style={{ fontFamily: "'Poppins', sans-serif;", }}for="exampleText" sm={4}>Fun Fact</Label>
                            <Col sm={8}>
                                <Input style={{ fontFamily: "'Poppins', sans-serif;", }}type="text" name="text" id="exampleText" placeholder="please enter a fun fact" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col >
                                <button className="button"
                                    style={{ margin: "2vh 0px 0px", color: "black", borderColor: "#FFA824", width: "125px" }}
                                    onClick={() => this.submitProfile(true)}
                                >Submit
                                </button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStudentFirstName: (event) => dispatch({ type: "GET_STUDENT_FIRST_NAME", payload: event.target.value }),
        setLoggedIn: (bool) => dispatch({ type: "IS_LOGGED_IN", payload: bool }),
        updateProfessional: (bool) => dispatch(isProfessional(bool)),
        updateStudent: (bool) => dispatch(isStudent(bool)),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfessionalProfile)
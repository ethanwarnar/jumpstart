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
import { connect } from 'react-redux'

import { Redirect } from "react-router-dom"
import { MdAccountCircle } from "react-icons/md"

import { Calendar, NavBar, ProNavBar } from '../components'

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
        isLoggedIn: dashboard.isLoggedIn,
        eventArray: dashboard.eventArray.array
    }
}

class StudentHome extends Component {

    render() {

        console.log(this.props.state)
        return (
            <React.Fragment>
                <Row>
                    <Col sm="6">
                        <Card body inverse style={{ justifyContent: "center", borderRadius: "18px", height: "60px", backgroundColor: "#FFA824", margin: "15vh 0px 0px", }} >
                            <CardText style={{ fontFamily: "'Poppins', sans-serif;", fontSize: "35px", textAlign: "center" }}>Welcome back, {this.props.firstName}!</CardText>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card body outline style={{ borderRadius: "18px", justifyContent: "center", height: "60px", borderColor: "#FFA824", margin: "15vh 0px 0px", borderWidth: "3px" }}>
                            <CardText style={{ fontFamily: "'Poppins', sans-serif;", fontSize: "22px", textAlign: "center" }}>Accepted Events {this.props.eventArray.length} </CardText>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card body outline style={{ borderRadius: "18px", justifyContent: "center", height: "60px", borderColor: "#FFA824", margin: "15vh 0px 0px", borderWidth: "3px" }}>
                            <CardText style={{ fontFamily: "'Poppins', sans-serif;", fontSize: "22px", textAlign: "center" }}>New Messages</CardText>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <CardText style={{ fontFamily: "'Poppins', sans-serif;", margin: "25px 0px 20px", fontSize: "25px" }}>Upcoming Events</CardText>
                        <Row>


                            <Col sm="6">
                                <Card body outline style={{ borderRadius: "18px", height: "150px", borderColor: "#FFA824", margin: "0px ", borderWidth: "3px" }} >
                                    {(this.props.eventArray.length >= 1)
                                        ? (
                                            <div>
                                                <CardText style={{ fontFamily: "'Poppins', sans-serif;", fontSize: "20px", }}>{this.props.eventArray[0].name} by {this.props.eventArray[0].host}</CardText>
                                                <CardText style={{ fontFamily: "'Poppins', sans-serif;", fontSize: "14px", }}>{this.props.eventArray[0].date} | {this.props.eventArray[0].time}</CardText>
                                            </div>
                                        )
                                        :
                                        (
                                            <CardText style={{ fontFamily: "'Poppins', sans-serif;", fontSize: "20px", }}>Please add an event</CardText>
                                        )
                                    }
                                </Card>
                            </Col>
                            <Col sm="6">
                                <Card body outline style={{ borderRadius: "18px", height: "150px", borderColor: "#FFA824", margin: "0px ", borderWidth: "3px" }} >
                                    {(this.props.eventArray.length >= 2)
                                        ? (
                                            <div>
                                                <CardText style={{ fontFamily: "'Poppins', sans-serif;", fontSize: "20px", }}>{this.props.eventArray[1].name} by {this.props.eventArray[1].host}</CardText>
                                                <CardText style={{ fontFamily: "'Poppins', sans-serif;", fontSize: "14px", }}>{this.props.eventArray[1].date} | {this.props.eventArray[1].time}</CardText>
                                            </div>
                                        )
                                        :
                                        (
                                            <CardText style={{ fontFamily: "'Poppins', sans-serif;", fontSize: "20px", }}>Please add an event</CardText>

                                        )
                                    }
                                </Card>
                            </Col>
                        </Row>

                        <CardText style={{ fontFamily: "'Poppins', sans-serif;", margin: "25px 0px 20px", fontSize: "25px" }}>My Mentors</CardText>


                        <Row>
                            <Col sm="4">
                                <div style={{ height: "130px", justifyContent: "center", textAlign: "center" }}>
                                    <MdAccountCircle style={{ height: "100%", width: "100%" }} />
                                </div>
                            </Col>

                            <Col sm="4">
                                <div style={{ height: "130px", justifyContent: "center", textAlign: "center" }}>
                                    <MdAccountCircle style={{ height: "100%", width: "100%" }} />
                                </div>
                            </Col>

                            <Col sm="4">
                                <div style={{ height: "130px", justifyContent: "center", textAlign: "center" }}>
                                    <MdAccountCircle style={{ height: "100%", width: "100%" }} />
                                </div>
                            </Col>
                        </Row>
                    </Col>


                    <Col sm="6">
                        <Card body outline style={{ borderRadius: "18px", borderColor: "#FFA824", margin: "25px 0px 50px", borderWidth: "3px" }}>
                            <Calendar />
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentHome) 
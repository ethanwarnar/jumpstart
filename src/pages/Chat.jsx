import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar, ProNavBar } from '../components'
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

import { connect } from 'react-redux'


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
class Chat extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.isStudent && <NavBar />}
                {this.props.isProfessional && <ProNavBar />}                <Container>
                    <Row>
                        {/* body outline style={{ borderRadius: "18px", justifyContent: "center", height: "80px", borderColor: "#FFA824", margin: "16vh 0px 0px", borderWidth: "3px" }} */}
                        <Col sm="4">
                            <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "15vh 0px 0px", }}>
                                <CardHeader>Ethan Warnar  |  Software Engineer</CardHeader>
                                <div style={{ height: "375px" }}>
                                    <iframe
                                        src="https://calendly.com/macchiatoo/"
                                        width="100%"
                                        height="95%"
                                        frameborder="0"
                                    ></iframe>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "15vh 0px 0px", }}>
                                <CardHeader>Seoyoon Kim  |  Product Manager</CardHeader>
                                <div style={{ height: "375px" }}>
                                    <iframe
                                        src="https://calendly.com/macchiatoo/"
                                        width="100%"
                                        height="95%"
                                        frameborder="0"
                                    ></iframe>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "15vh 0px 0px", }}>
                                <CardHeader>Bill Gates  |  Entrepreneur</CardHeader>
                                <div style={{ height: "375px" }}>
                                    <iframe
                                        src="https://calendly.com/macchiatoo/"
                                        width="100%"
                                        height="95%"
                                        frameborder="0"
                                    ></iframe>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "40px 0px 0px", }}>
                                <CardHeader>Jess McKenzie  |  Recruiter</CardHeader>
                                <div style={{ height: "375px" }}>
                                    <iframe
                                        src="https://calendly.com/macchiatoo/"
                                        width="100%"
                                        height="95%"
                                        frameborder="0"
                                    ></iframe>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "40px 0px 0px", }}>
                                <CardHeader>Eric Yuan | Software Developer</CardHeader>
                                <div style={{ height: "375px" }}>
                                    <iframe
                                        src="https://calendly.com/macchiatoo/"
                                        width="100%"
                                        height="95%"
                                        frameborder="0"
                                    ></iframe>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "40px 0px 0px", }}>
                                <CardHeader>Kate Middleton | Entrepreneur</CardHeader>
                                <div style={{ height: "375px" }}>
                                    <iframe
                                        src="https://calendly.com/macchiatoo/"
                                        width="100%"
                                        height="95%"
                                        frameborder="0"
                                    ></iframe>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment >
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
)(Chat) 
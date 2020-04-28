import React, { useState, Component } from 'react'
import styled from 'styled-components'
import logo from '../logo.png'

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

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import StudentProfile from './StudentProfile'

import { MdLocalCafe, MdAdd } from "react-icons/md"


const Container = styled.div.attrs({
    className: 'container',
})
    `
`



class StudentLanding extends Component {



    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        console.log("hello");
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="6">
                        <CardText style={{ fontFamily: "'Poppins', sans-serif;", margin: "31vh 0px 0px", fontSize: "40px", }}>
                            Connect with industry<br /> professionals worldwide.
                            </CardText>
                        <CardText style={{ fontFamily: "'Poppins', sans-serif;", margin: "5vh 0px 0px", fontSize: "25px", }}>
                            Macchiato is a platform where you can engage with various companies through virtual events.
                            </CardText>
                        <div style={{ textAlign: "center" }}>
                            <button className="button" onClick={() => this.toggleModal()}
                                style={{ margin: "5vh 0px 0px", color: "black", borderColor: "#FFA824", width: "125px" }}
                            >
                                Register
                            </button>
                        </div>
                    </Col>
                    <Col sm="6">
                        <div style={{ height: "250px", width: "100%", justifyContent: "center", textAlign: "center", margin: "30vh 0px 0px" }}>
                            <img
                                alt=""
                                src={logo}
                                width="350px"
                                height="350px"
                            />{'  '}
                        </div>
                    </Col>
                </Row>
                <Modal style={{ top: "4vh", width: "550px" }}
                    isOpen={this.state.showModal}
                    toggle={() => this.toggleModal()}
                >
                    <ModalHeader style={{ fontFamily: "po'Poppins', sans-serif;ppins", }}>
                        Profile
                    </ModalHeader>
                    <ModalBody style={{ height: "525px", overflowY: "auto" }}>
                        <div style={{ overflow: "scoll" }}>
                            <StudentProfile style={{ overflow: "scroll" }} />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </React.Fragment>

        )
    }
}



export default StudentLanding
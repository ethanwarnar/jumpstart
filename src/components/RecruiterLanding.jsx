import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../logo.png'
import '../style/style.css'

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

import ProfessionalProfile from './ProfessionalProfile'
import { MdLocalCafe, MdAdd } from "react-icons/md"

const Container = styled.div.attrs({
    className: 'container',
})
    `

`
class RecruiterLanding extends Component {


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
                            <CardText style={{fontFamily:"poppins", margin: "31vh 0px 0px", fontSize: "40px", }}>
                                Discover global   talent <br /> in one-click.
                            </CardText>
                            <CardText style={{ fontFamily:"poppins",margin: "5vh 0px 0px", fontSize: "25px", }}>
                                Macchiato is a platform where you can host events and connect with selected students around the world.
                            </CardText>
                            <div style={{ textAlign: "center" }}>
                                <button className='button' color="secondary"
                                    style={{ margin: "5vh 0px 0px", color: "black", borderColor: "#FFA824", width: "125px" }}
                                    onClick={() => this.toggleModal()}>
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
                    <Modal style={{ top: "4vh",width: "550px" }}
                        isOpen={this.state.showModal}
                        toggle={() => this.toggleModal()}
                    >
                        <ModalHeader style={{ fontFamily: "poppins", }} > Profile </ModalHeader>
                        <ModalBody style={{ height: "525px", overflowY: "auto" }}>
                            <div style={{ overflow: "scoll" }}>
                                <ProfessionalProfile style={{ overflow: "scroll" }} />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </Modal>
                
            </React.Fragment>
        )
    }
}

export default RecruiterLanding
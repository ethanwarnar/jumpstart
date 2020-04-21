import React, { useState, Component } from 'react'
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

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import StudentProfile from './StudentProfile'

import { MdLocalCafe, MdAdd } from "react-icons/md"


const Container = styled.div.attrs({
    className: 'container',
})
    `
`



class StudentLanding extends Component {

    // componentWillMount(){
    //     const toggle = () => setModal(!modal);
    //     const [modal, setModal] = useState(false);
    //     const [backdrop, setBackdrop] = useState(true);
    //     const [keyboard, setKeyboard] = useState(true);
    // }

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
                <Container>
                    <Row>

                        <Col sm="6">
                            <CardText style={{ margin: "32vh 0px 0px", fontSize: "45px", }}>
                                Connect with industry<br /> professionals worldwide.
                            </CardText>
                            <CardText style={{ margin: "5vh 0px 0px", fontSize: "25px", }}>
                                Macchiato is a platform where you can engage with various companies through virtual events.
                            </CardText>
                            <div style={{ textAlign: "center" }}>
                                <Button color="secondary" onClick={() => this.toggleModal()}
                                    style={{ margin: "5vh 0px 0px", color: "black", backgroundColor: "#FFA824", borderColor: "#FFA824", width: "125px", fontSize: "15px" }}
                                >
                                    Register
                            </Button>
                            </div>
                        </Col>
                        <Col sm="6">
                            <div style={{ height: "250px", width: "100%", justifyContent: "center", textAlign: "center", margin: "35vh 0px 0px" }}>
                                <MdLocalCafe style={{ transform: "scaleX(-1)", height: "200px", width: "200px" }} />
                                <MdAdd style={{ color: "#FFA824", height: "75px", width: "75px" }} />
                                <MdLocalCafe style={{ height: "200px", width: "200px" }} />
                            </div>
                        </Col>
                    </Row>
                    <Modal style={{ top: "5vh" }}
                        isOpen={this.state.showModal}
                        toggle={() => this.toggleModal()}
                    >
                        <ModalHeader> Profile </ModalHeader>
                        <ModalBody style={{ height: "525px", overflowY: "auto" }}>
                            <div style={{ overflow: "scoll" }}>
                                <StudentProfile style={{ overflow: "scroll" }} />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button> */}
                        </ModalFooter>
                    </Modal>
                </Container>
            </React.Fragment>

        )
    }
}



export default StudentLanding
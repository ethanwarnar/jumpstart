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

const Container = styled.div.attrs({
    className: 'container',
})
    `
    margin-bottom:75px;
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
                    <Container />
                    <Row>
                        <Col sm="6">
                            <CardText style={{ margin: "200px 0px 0px", fontSize: "45px", }}>
                                Connect with industry<br /> professionals worldwide.
                            </CardText>
                            <CardText style={{ margin: "30px 0px 0px", fontSize: "25px", }}>
                                XXX is a platform where you can engage with various companies through virtual events.
                            </CardText>
                            <Button color="secondary" onClick={() => this.toggleModal()}
                                style={{ margin: "30px 0px 0px", color: "black", backgroundColor: "#FFA824", borderColor: "#FFA824", width: "125px", fontSize: "15px" }}
                            >
                                Register
                            </Button>
                        </Col>
                        <Card body outline style={{ borderColor: "#FFA824", margin: "125px 0px 0px" }} >
                            <CardBody>
                                <CardText style={{ height: "500px", fontSize: "20px", textAlign: "center" }}></CardText>
                            </CardBody>
                        </Card>
                    </Row>
                    <Modal style={{ top: "125px" }}
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
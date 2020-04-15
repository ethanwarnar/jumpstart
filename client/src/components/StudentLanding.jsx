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
    margin-bottom:75px;
`
class StudentLanding extends Component {
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
                            <Button color="secondary"
                                style={{ margin: "30px 0px 0px", color: "black", backgroundColor: "#FFA824", borderColor: "#FFA824", width: "125px", fontSize: "15px" }}
                            // onClick={() => this.showComponent("recruiterLanding")}
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
                </Container>
            </React.Fragment>

        )
    }
}



export default StudentLanding
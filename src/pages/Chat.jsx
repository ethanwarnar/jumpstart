import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar, ProNavBar } from '../components'
import { motion, AnimatePresence } from "framer-motion"

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
import professionals from '../data/professionals'


const Container = styled.div.attrs({
    className: 'container',
})
    `
`
const Events = styled.div.attrs({
})
    `
    width:100%;
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
    constructor(props) {
        super(props);

        this.state = {
            search: null
        };
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    render() {

        const items = professionals.filter((x) => {
            if (this.state.search == null)
                return x
            else if (x.name.toLowerCase().includes(this.state.search.toLowerCase()) || x.company.toLowerCase().includes(this.state.search.toLowerCase()) || x.sector.toLowerCase().includes(this.state.search.toLowerCase()) || x.role.toLowerCase().includes(this.state.search.toLowerCase())) {
                return (x)
            }
        }).map(x => {
            return (
                <Col sm="4">
                    <AnimatePresence >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>

                            <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "30px 0px 0px", }}>
                                <CardHeader style={{ fontFamily: "'Poppins', sans-serif;" }}>{x.name}  -  {x.role} <br/> {x.company} | {x.sector} </CardHeader>
                                <div style={{ height: "345px" }}>
                                    <iframe
                                        src="https://calendly.com/macchiatoo/"
                                        width="100%"
                                        height="95%"
                                        frameborder="0"
                                    ></iframe>
                                </div>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </Col>
            )
        }
        )

        return (
            <React.Fragment>
                {this.props.isStudent && <NavBar />}
                {this.props.isProfessional && <ProNavBar />}
                <Container>
                    <Row>

                        <Col style={{ textAlign: "center" }}>
                            <div style={{ textAlign: "center" }}>
                                <div style={{ width: "525px", display: "inline-block", margin: "15vh 0px 0px" }}>
                                    <Input onChange={(e) => this.searchSpace(e)} style={{ fontFamily: "'Poppins', sans-serif;", borderRadius: "18px", borderWidth: "3px", textAlign: "center", color: "black", fontSize: "20px", height: "50px", borderColor: "#FFA824", }} type="text" name="email" id="exampleEmail" placeholder="search by name, role, sector or company" />
                                </div>
                            </div>
                        </Col>
                    </Row>


                    <Events style={{ marginTop: "0px", height: "600px", overflowY: "auto" }}>
                        <Row>
                            {items}
                        </Row>
                    </Events>


                </Container>
            </React.Fragment>
        )

















        // return (
        //     <React.Fragment>
        //         {this.props.isStudent && <NavBar />}
        //         {this.props.isProfessional && <ProNavBar />}                <Container>
        //             <Row>
        //                 {/* body outline style={{ borderRadius: "18px", justifyContent: "center", height: "80px", borderColor: "#FFA824", margin: "16vh 0px 0px", borderWidth: "3px" }} */}
        //                 <Col sm="4">

        //                 </Col>
        //                 <Col sm="4">
        //                     <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "15vh 0px 0px", }}>
        //                         <CardHeader>Seoyoon Kim  |  Product Manager</CardHeader>
        //                         <div style={{ height: "375px" }}>
        //                             <iframe
        //                                 src="https://calendly.com/macchiatoo/"
        //                                 width="100%"
        //                                 height="95%"
        //                                 frameborder="0"
        //                             ></iframe>
        //                         </div>
        //                     </Card>
        //                 </Col>
        //                 <Col sm="4">
        //                     <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "15vh 0px 0px", }}>
        //                         <CardHeader>Bill Gates  |  Entrepreneur</CardHeader>
        //                         <div style={{ height: "375px" }}>
        //                             <iframe
        //                                 src="https://calendly.com/macchiatoo/"
        //                                 width="100%"
        //                                 height="95%"
        //                                 frameborder="0"
        //                             ></iframe>
        //                         </div>
        //                     </Card>
        //                 </Col>
        //                 <Col sm="4">
        //                     <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "40px 0px 0px", }}>
        //                         <CardHeader>Jess McKenzie  |  Recruiter</CardHeader>
        //                         <div style={{ height: "375px" }}>
        //                             <iframe
        //                                 src="https://calendly.com/macchiatoo/"
        //                                 width="100%"
        //                                 height="95%"
        //                                 frameborder="0"
        //                             ></iframe>
        //                         </div>
        //                     </Card>
        //                 </Col>
        //                 <Col sm="4">
        //                     <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "40px 0px 0px", }}>
        //                         <CardHeader>Eric Yuan | Software Developer</CardHeader>
        //                         <div style={{ height: "375px" }}>
        //                             <iframe
        //                                 src="https://calendly.com/macchiatoo/"
        //                                 width="100%"
        //                                 height="95%"
        //                                 frameborder="0"
        //                             ></iframe>
        //                         </div>
        //                     </Card>
        //                 </Col>
        //                 <Col sm="4">
        //                     <Card style={{ borderWidth: "3px", borderColor: "#FFA824", borderRadius: "10px", margin: "40px 0px 0px", }}>
        //                         <CardHeader>Kate Middleton | Entrepreneur</CardHeader>
        //                         <div style={{ height: "375px" }}>
        //                             <iframe
        //                                 src="https://calendly.com/macchiatoo/"
        //                                 width="100%"
        //                                 height="95%"
        //                                 frameborder="0"
        //                             ></iframe>
        //                         </div>
        //                     </Card>
        //                 </Col>
        //             </Row>
        //         </Container>
        //     </React.Fragment >
        // )
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
import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar } from '../components'
import { connect } from 'react-redux'

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
import { addEvent } from '../redux/actions'

import events from '../data/events'

const Container = styled.div.attrs({
    className: 'container',
})
    `
`
const Space = styled.div.attrs({
    className: 'container',
})
    `
    height:45px;
`

const Events = styled.div.attrs({
})
    `
    width:100%;
`

const mapStateToProps = state => {
    const { dashboard } = state
    return {
        eventArray: dashboard.eventArray.array,
        state: dashboard
    }
}

class Resources extends Component {
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

        const items = events.filter((x) => {
            if (this.state.search == null)
                return x
            else if (x.name.toLowerCase().includes(this.state.search.toLowerCase()) || x.company.toLowerCase().includes(this.state.search.toLowerCase()) || x.host.toLowerCase().includes(this.state.search.toLowerCase())) {
                return x
            }
        }).map(x => {
            return (
                <Col sm="4">
                    <Card body outline style={{ borderColor: "#FFA824", margin: "30px 0px 0px" }} >
                        <CardTitle style={{ fontSize: "20px", textAlign: "center" }}>{x.name}</CardTitle>
                        <CardBody>
                            <CardText style={{ fontSize: "17px" }}>{x.host}  |  {x.company}</CardText>
                            <CardText style={{ fontSize: "17px" }}>{x.date}</CardText>
                            <CardText style={{ fontSize: "17px" }}>{x.time}</CardText>
                            <div style={{ textAlign: "center" }}>
                                <Button
                                    style={{ margin: "15px 0px 0px", color: "black", backgroundColor: "#FFA824", borderColor: "#FFA824", width: "125px", fontSize: "15px", textAlign: "center" }}
                                    onClick={() => this.props.addNewEvent(x)}
                                >Sign Up
                            </Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            )
        }
        )





        console.log(this.props.state)
        console.log(this.props.eventArray)

        return (
            <React.Fragment>
                <NavBar />
                <Container>
                    <Space />
                    <Row>
                        <Col sm="4">
                            <Card body outline style={{ borderColor: "#FFA824", margin: "30px 0px 0px" }} >
                                <CardText style={{ fontSize: "20px", textAlign: "center" }}>
                                    {this.props.eventArray.length} events added to calendar.
                                </CardText>

                            </Card>
                        </Col>
                        <Col sm="8">

                            <div style={{ margin: "30px 0px 0px" }}>
                                <Input onChange={(e) => this.searchSpace(e)} style={{ textAlign: "center", color: "black", fontSize: "20px", height: "72px", borderColor: "#FFA824", }} type="text" name="email" id="exampleEmail" placeholder="search by event name, company or host" />
                            </div>

                        </Col>
                    </Row>

                    <Events style={{ marginTop: "30px", height: "525px", overflowY: "auto" }}>
                        <Row>
                            {items}
                        </Row>
                    </Events>


                </Container>
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewEvent: (event) => dispatch(addEvent(event)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Resources)


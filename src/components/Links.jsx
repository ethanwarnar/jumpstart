import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav ml-auto flex-nowrap text-right',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/jumpstart/profile" className="nav-link m-2 menu-item nav-active">
                                Profile
                            </Link>

                        </Item>

                        <Item>
                            <Link to="/jumpstart/jobs" className="nav-link m-2 menu-item nav-active">
                                Jobs
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/jumpstart/chat" className="nav-link m-2 menu-item nav-active">
                                Chat
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/jumpstart/resources" className="nav-link m-2 menu-item nav-active">
                                Resources
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
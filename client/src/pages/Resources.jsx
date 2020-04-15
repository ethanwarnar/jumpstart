import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar } from '../components'


const Container = styled.div.attrs({
    className: 'container',
})
    `
`
class Resources extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Container>
                    <div>
                        <p>In this page you'll see Resources table and recommendations</p>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default Resources
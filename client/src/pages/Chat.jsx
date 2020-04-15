import React, { Component } from 'react'
import styled from 'styled-components'
import { NavBar } from '../components'


const Container = styled.div.attrs({
    className: 'container',
})
    `
`
class Chat extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Container>
                    <div>
                        <p>In this page you'll see the chat interface</p>
                    </div>
                </Container>
            </React.Fragment>
        )
    }
}

export default Chat
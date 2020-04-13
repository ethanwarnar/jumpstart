import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
    className: 'container',
})
    `
`
class Chat extends Component {
    render() {
        return (
            <Container>
                <div>
                    <p>In this page you'll see the chat interface</p>
                </div>
            </Container>
            
        )
    }
}

export default Chat
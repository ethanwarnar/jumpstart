import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
    className: 'container',
})
    `
`
class Resources extends Component {
    render() {
        return (
            <Container>
                <div>
                    <p>In this page you'll see Resources table and recommendations</p>
                </div>
            </Container>
        )
    }
}

export default Resources
import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
    className: 'container',
})
    `
`
class Jobs extends Component {
    render() {
        return (
            <Container>
                <div>
                    <p>In this page you'll see the Jobs table</p>
                </div>
            </Container>
        )
    }
}

export default Jobs
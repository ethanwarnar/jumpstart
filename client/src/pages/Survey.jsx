import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
    className: 'container',
})
`
`


class Survey extends Component {
    render() {
        return (
            <Container>
                <div>
                    <p>In this page you'll see the survey chunk</p>
                </div>
            </Container>
        )
    }
}

export default Survey
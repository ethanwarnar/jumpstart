
import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


import logo from '../logo.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand d-none d-lg-inline-block',
})
`
`

class Logo extends Component {
    render() {
        return (
            // <Wrapper href="https://sambarros.com">
            <React.Fragment>
                <Wrapper>
                    <img className="navbar-brand-two mx-auto d-lg-none d-inline-block" 
                        src={logo} 
                        width="50" 
                        height="50" 
                        alt="sambarros.com" />
                    <Link to="/" className="navbar-brand d-none d-lg-inline-block">
                    Jumpstart
                </Link>
                </Wrapper>
                
          </React.Fragment>

        )
    }
}

export default Logo

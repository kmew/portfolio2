import React, { Component } from 'react'
import Styled from 'styled-components'

import Title from './elements/Title'
import Quote from './elements/Quote'
import Logo from './elements/Logo'


const Container = Styled.div`
    width: 100vw;
    height: 100vh;
`


class home extends Component {
    state = {  }
    render() { 
        return (  
            <Container>
                <Title />
                <Quote />
                <Logo />
            </Container>
        )
    }
}
 
export default home;
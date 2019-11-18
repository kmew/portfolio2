import React, { Component } from 'react'
import Styled from 'styled-components'


const Container = Styled.div`
    border: 1px solid orange;
    width: 100vw;
    height: 100vh;
`

const Background = Styled.div`
    position: absolute;
    width: 50vw;
    height: 100vh;
    background-color: #037F98;
`


const BgFont = Styled.p`
    position: absolute;
    font-family: 'Open Sans', sans-serif;
    color: #E46176;
    font-size: 150px;
`


class work extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <Background />
                <BgFont>WORK</BgFont>
            </Container>
        )
    }
}
 
export default work;
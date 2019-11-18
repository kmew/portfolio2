import React, { Component } from 'react'
import Styled from 'styled-components'


const Header1 = Styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: bold;
    font-size: 32px;
    color: #B1B1B1;
    padding: 0px;
    margin: 0px;
    text-align: right;
`


const Header2 = Styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: bold;
    font-size: 32px;
    color: #EEBF93;
    padding: 0px;
    margin: 0px;
    text-align: right;
`


const Body = Styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #B1B1B1;
    padding: 0px;
    margin: 0px;
    text-align: right;
`


class personal extends Component {
    state = {  }
    render() { 
        return (
            <>
                <Header1>About Me</Header1>
                <Header2>PD</Header2>
                <Body>Tissatat Charoenchai</Body>
                <Body>Podduang | PD</Body>
            </>
        )
    }
}
 
export default personal;
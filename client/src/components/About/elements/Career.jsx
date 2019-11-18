import React, { Component } from 'react'
import Styled from 'styled-components'


const Header = Styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: bold;
    font-size: 32px;
    color: #107A6B;
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


class career extends Component {
    state = {  }
    render() { 
        return (
            <>
                <Header>About Career</Header>
                <Body>Hello world! I'm newly face who</Body>
                <Body>just start in developer world.</Body>
                <Body>I do believe that client is a partner,</Body>
                <Body>who we can work together to</Body>
                <Body>pursue a higher goal</Body>
            </>
        )
    }
}
 
export default career;
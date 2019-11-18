import React, { Component } from 'react'
import Styled from 'styled-components'


const LogoBox = Styled.div`
    border: 1px solid blue;
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: 60vh;
    right: 22vw;
`


const QuoteLine = Styled.p`
    margin: 0px;
    color: #B1B1B1;
    font-family: Georgia;
    font-style: Italic;
    font-size: 30px;
    width: fit-content;
    height: auto;
`


class Quote extends Component {
    state = {  }
    render() { 
        return (
            <LogoBox>
                <QuoteLine>YOU!</QuoteLine>
                <QuoteLine>YES! YOU!</QuoteLine>
                <QuoteLine>THIS IS ME!</QuoteLine>
                <QuoteLine>NICE TO MEET YOU!</QuoteLine>
            </LogoBox>
        )
    }
}
 
export default Quote;
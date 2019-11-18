import React, { Component } from 'react'
import Styled from 'styled-components'


const TitleBox = Styled.div`
    border: 1px solid red;
    width: fit-content;
    height: fit-content;
    position: absolute;
    left: 10vw;
    top: 25vh;
`


const StyledTitle = Styled.p`
    margin: 0px;
    color: #EEBF93;
    font-family: 'Open Sans', sans-serif;
    font-style: bold;
    font-size: 70px;
    width: fit-content;
    height: auto;
`

const StyledHeader = Styled.p`
    margin: -30px 0px 0px 0px;
    color: #B1B1B1;
    font-family: 'Open Sans', sans-serif;
    font-style: semi-bold;
    font-size: 70px;
    width: fit-content;
    height: auto;
`


class Title extends Component {
    state = {  }
    render() { 
        return (
            <TitleBox>
                <StyledTitle>PD</StyledTitle>
                <StyledHeader>Web developer</StyledHeader>
            </TitleBox>
        )
    }
}
 
export default Title;
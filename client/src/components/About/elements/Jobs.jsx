import React, { Component } from 'react'
import Styled from 'styled-components'


const Header = Styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: bold;
    font-size: 32px;
    color: #E86677
    padding: 0px;
    margin: 0px;
`


const Body1 = Styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #B1B1B1;
    padding: 0px;
    margin: 0px;
`


const Body2 = Styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #4E78FF;
    padding: 0px;
    margin: 0px;
`


const Body3 = Styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #B1B1B1;
    transform: rotate(-90deg);
    padding: 0px;
    margin: 0px;
`


class jobs extends Component {
    state = {  }
    render() { 
        return (
            <>
                <Header>About Jobs</Header>
                <Body1>Mostly: Front-End</Body1>
                <Body1>Possibly: UX/UI Design</Body1>
                <Body1>Ever: Back-End</Body1>
                <Body2>MERN stack</Body2>
                <Body2>Flutter</Body2>
                <Body3>THIS LIST WILL ADD UP</Body3>
            </>
        )
    }
}
 
export default jobs;
import React, { Component } from 'react'
import Styled from 'styled-components'

import Personal from '../About/elements/Personal'
import Career from '../About/elements/Career'
import Jobs from '../About/elements/Jobs'


const Container = Styled.div`
    border: 1px solid blue;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 50px 180px 80px 30px 70px 190px auto 350px 150px;
    grid-template-rows: 60px 200px 40px 140px 60px 60px;
`


const SpaceBox = Styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
`


const Box1 = Styled.div`
    border: 1px solid red;
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;
`


const Box2 = Styled.div`
    border: 1px solid blue;
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 5;
`


const Box3 = Styled.div`
    border: 1px solid green;
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 4;
    grid-row-end: 6;
`


const Box4 = Styled.div`
    background-color: yellow;
    grid-column-start: 8;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 7;
`


class about extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <SpaceBox />
                <Box1>
                    <Personal />
                </Box1>
                <Box2>
                    <Career />
                </Box2>
                <Box3>
                    <Jobs />
                </Box3>
                <SpaceBox />
                <Box4 />
            </Container>
        )
    }
}
 
export default about;
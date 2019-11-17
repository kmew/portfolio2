import React, { Component } from 'react'
import Styled from 'styled-components'


const ImgBox = Styled.div``


const Img = Styled.img`
    width: 200px;
    height: 200px;
    background-size:cover;
    background-position:center;
    display: block;
`


class Logo extends Component {
    state = {  }
    render() { 
        return (
            <ImgBox>
                <Img src="" alt="qwer" />
            </ImgBox>
        )
    }
}
 
export default Logo;
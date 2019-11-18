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
                <Img src="/Users/tissatatcharoenchai/Desktop/trainee_init/work5/port_2/client/src/components/Home/elements/qwer.png" alt="qwer" />
            </ImgBox>
        )
    }
}
 
export default Logo;
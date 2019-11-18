import React, { Component } from 'react'
import Styled from 'styled-components'


const NavBox = Styled.div`
    position: fixed;
    top: 15px;
    right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 40vw;
    height: fit-content;
`


const BGBox = Styled.div`
    position: absolute;
    width: 570px;
    height: 65px;
    blur: 8px;
    background-color: rgba(255,255,255,0.15);
    z-index: -5;

    @media (max-width: 1280px) {
        height: 50px;
        width: 420px;
        height: 40px;
    }
`


const MenuBox = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 700px;
    height: auto;
`


const NavMenu = Styled.p`
    color: #26798E;
    font-family: 'Open Sans', sans-serif;
    font-size: 36px;
    padding: 0px;
    margin: 0px;
`


const NavBtn = Styled.div`
    cursor: pointer;
    :hover ${NavMenu} {
        border: 0.5px solid #4E78FF; 
    }
`


class nav extends Component {
    state = {  }
    render() { 
        return (
            <NavBox>
                <BGBox />
                <MenuBox>
                    <NavBtn>
                        <NavMenu>Home</NavMenu>
                    </NavBtn>
                    <NavBtn>
                        <NavMenu>About</NavMenu>
                    </NavBtn>
                    <NavBtn>
                        <NavMenu>Work</NavMenu>
                    </NavBtn>
                    <NavBtn>
                        <NavMenu>Contact</NavMenu>
                    </NavBtn>
                </MenuBox>
            </NavBox>
        )
    }
}
 
export default nav;
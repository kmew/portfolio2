import React, { Component } from 'react'
import Styled from 'styled-components'

import Home from '../components/Home/home'
import Nav from '../components/Nav/nav'

const Container = Styled.div`
  background: #181B2A;
  padding: 0px;
  margin: 0px;
  position: absolute;
`


class SinglePage extends Component {
  state = {  }
  render() { 
    return (
      <Container>
        <Nav />
        <Home />
      </Container>
    )
  }
}
 
export default SinglePage

import React, { Component } from 'react'
import Styled from 'styled-components'

import Nav from '../components/Nav/nav'
import Home from '../components/Home/home'
import About from '../components/About/about'
import Work from '../components/Work/work'
import Contact from '../components/Contact/contact'

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
        <About />
        <Work />
        <Contact />
      </Container>
    )
  }
}
 
export default SinglePage

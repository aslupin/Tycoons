import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Navbar from './Navbar'

const GlobbalStyled = createGlobalStyle`
  @font-face{
      font-family: 'Roboto-Medium';
      src: url('../assets/fonts/Roboto/Roboto-Medium.ttf');
    }
  
  body {
    margin: 0;
    background: #fff;
  }
`

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`

const ContainerGlobal = props => {
  return (
    <Container>
      <GlobbalStyled />
      {props.children}
      <Navbar />
    </Container>
  )
}

export default ContainerGlobal

import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'
import MapTransit from '../assets/mapforTransit.png'

const ContainerOut = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`
const Img = styled.img`
 position: absolute;
    z-index: -1;
    width: 375px;
    height: 812px;
    /* height: 100%; */
    top: 10px;
    left: 0px;
  /* width: 100vw;
  height: 100vh;
  background-image: url(${MapTransit});
  background-size: cover;
  background-repeat: no-repeat; */
`

const TextMyMap = styled.p`
  color: #000;
  opacity: 0.87;
  font-size: 26px;
  position: absolute;
  top: 5px;
  border-left: 7px solid rgb(191, 84, 84);
  padding-left: 10px;
`
const Transaction = () => {
  return (
    <Container>
      <TextMyMap>My Map</TextMyMap>
      <ContainerOut>
        <Img src={MapTransit} />
      </ContainerOut>
    </Container>
  )
}

export default Transaction

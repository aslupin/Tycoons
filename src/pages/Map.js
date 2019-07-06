import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'
import MapTransit from '../assets/mapforTransit.png'

const Img = styled.img`
  margin: 10px 0px;
`

const Transaction = () => {
  return (
    <Container>
      <Img src={MapTransit} />
    </Container>
  )
}

export default Transaction

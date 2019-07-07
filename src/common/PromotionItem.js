import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'

const WrapItem = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  margin-bottom: 0.75rem;
`

const Detail = styled.div`
  border-radius: 10px;
  width: 90%;
  height: 130px;
  background-color: rgb(217, 168, 123, 0.16);
  margin-right: 1em;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`

const Readmore = styled.p`
  color: #000;
  opacity: 0.6;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  right: 15px;
`
const TextPromotion = styled.p`
  margin-top: 1rem;
  margin-left: 1rem;
`
const PromotionItem = props => {
  return (
    <WrapItem>
      <Detail>
        {/* <HorDetail> */}
        <TextPromotion> {props.text}</TextPromotion>
        <Readmore>Readmore</Readmore>
        {/* </HorDetail> */}
      </Detail>
    </WrapItem>
  )
}

export default PromotionItem

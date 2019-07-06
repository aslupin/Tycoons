import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'

const WrapItem = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  margin-bottom: 0.75rem;
`

const Detail = styled.div`
  border-radius: 10px;
  width: 90%;
  height: 60px;
  background-color: rgb(217, 168, 123, 0.16);
  margin-right: 1em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const HorDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 2rem;
`

const PromotionItem = props => {
  return (
    <WrapItem>
      <Detail>
        <p>hello</p>
        <HorDetail>{props.text}</HorDetail>
      </Detail>
    </WrapItem>
  )
}

export default PromotionItem

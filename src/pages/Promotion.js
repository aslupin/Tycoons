import React from 'react'
import styled from 'styled-components'
import Container from '../common/Container'
import PromotionItem from '../common/PromotionItem'

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
const TextTopic = styled.p`
  color: #42403e;
  font-size: 20px;
  margin: 1em;
`

const Promotion = () => {
  return (
    <Container>
      <TextTopic>Promotions</TextTopic>
      <PromotionItem text="ฟรี 3 เที่ยว! ลงทะเบียนภายในสัปดาห์นี้" />
      <PromotionItem text="พิเศษ! ลด 30% เหมา 30 เที่ยวเดือนนี้สำหรับนักเรียนนักศึกษา" />
    </Container>
  )
}

export default Promotion

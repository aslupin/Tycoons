import React from 'react'
import styled from 'styled-components'
import IcB from '../assets/ic_b.png'
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
const BtnPay = styled.div`
  width: 65px;
  height: 60px;
  background: transparent;
  border: 1px solid #c89568;
  border-radius: 10px;
  color: #c89568;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const IconB = styled.img`
  width: 13px;
  height: 17px;
  margin: auto 1rem;
`

const Cost = styled.p`
  color: #585858;
  font-size: 16px;
`

const HorDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 2rem;
`

const Location = styled.p`
  color: #585858;
  font-size: 10px;
  margin: 0;
`
const TimerStamp = styled.p`
  color: #585858;
  font-size: 10px;
  opacity: 0.71;
  margin: 0;
`
const Item = () => {
  return (
    <WrapItem>
      <Detail>
        <IconB src={IcB} />
        <Cost>35.00</Cost>
        <HorDetail>
          <Location>สภานที่: {`ม.เกษตร`}</Location>
          <TimerStamp>เวลาขึ้น: {`10/2/3 12:00`} น.</TimerStamp>
          <TimerStamp>เวลาลง: {`10/2/3 12:18`} น.</TimerStamp>
        </HorDetail>
      </Detail>
    </WrapItem>
  )
}

export default Item

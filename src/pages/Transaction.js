import React from 'react'
import Container from '../common/Container'
import styled from 'styled-components'
import ItemTransaction from '../common/Item'
const CardBalance = styled.div`
  width: 90%;
  height: 220px;
  border: 1px solid rgb(151, 151, 151, 0.12);
  border-radius: 10px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const WrapTopic = styled.div`
  width: 100%;
`
const WalletBalance = styled.p`
  color: #42403e;
  font-size: 20px;
  margin: 1em;
`
const ValueBalance = styled.p`
  color: #e2c080;
  font-size: 45px;
  margin-bottom: 10px;
`

const InlineWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`

const THB = styled.p`
  color: #e2c080;
  font-size: 20px;
  margin: 0 0.5rem;
`

const BtnCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgb(216, 216, 216, 0.21);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 60px;
  right: 30px;
  cursor: pointer;
  font-size: 20px;
  color: #dd8b48;
`
const HrCustom = styled.hr`
  border-color: #d8d8d8;
  width: 60%;
`

const Menu = styled.p`
  font-size: 18px;
  /* margin: auto 0.5rem; */
  color: #727171;
`

const MenuTabsWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 2rem;
`

const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Transaction = () => {
  return (
    <Container>
      <CardBalance>
        <WrapTopic>
          <WalletBalance>Wallet balance</WalletBalance>
        </WrapTopic>
        <InlineWrap>
          <ValueBalance>1850.98</ValueBalance>
          <THB>THB</THB>
          <BtnCircle>+</BtnCircle>
        </InlineWrap>
        <HrCustom />
      </CardBalance>

      <MenuTabsWrap>
        <Menu> Transaction</Menu>
        <Menu> History</Menu>
        <Menu> Promotion</Menu>
      </MenuTabsWrap>
      <ContainerItem>
        <ItemTransaction />
        <ItemTransaction />
        <ItemTransaction />
        <ItemTransaction />
        <ItemTransaction />
        <ItemTransaction />
        <ItemTransaction />
        <ItemTransaction />
        <ItemTransaction />
        <ItemTransaction />
        <ItemTransaction />
        <ItemTransaction />
        <ItemTransaction />
        <ItemTransaction />
        <ItemTransaction />
      </ContainerItem>
    </Container>
  )
}

export default Transaction

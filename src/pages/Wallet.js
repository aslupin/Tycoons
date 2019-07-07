import React, { useState, useEffect } from 'react'
import Container from '../common/Container'
import styled from 'styled-components'
import ItemTransaction from '../common/Item'
import transactionApi from '../apis/transaction'
import userApi from '../apis/user'
import fdb from '../apis/fdb'

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
  cursor: pointer;

  &:hover {
    background-color: #faf6f2;
  }
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
  /* width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgb(216, 216, 216, 0.21); */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 40px;
  color: #dd8b48;
`
const HrCustom = styled.hr`
  border-color: #d8d8d8;
  opacity: 0.3;
  width: 60%;
`

const Menu = styled.p`
  font-size: 18px;
  color: #727171;
  margin-left: 3rem;
`

const MenuTabsWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90%;
  margin-bottom: 0.5rem;
`

const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`
const Wallet = () => {
  const [transactions, setTransactions] = useState([])
  const [balance, setBalance] = useState(0)

  const updateTransactions = username => {
    transactionApi.getHitory(username).then(transactions => {
      setTransactions(transactions)
    })
  }

  const updateBalance = username => {
    userApi.getBalance(username).then(balance => {
      setBalance(balance)
    })
  }

  useEffect(() => {
    const username = localStorage.getItem('username')
    updateTransactions(username)
    updateBalance(username)
    const db = fdb.getDb()
    db.ref('/users').on('value', snapshot => {
      updateBalance(username)
    })
    db.ref('/transactions').on('value', snapshot => {
      updateTransactions(username)
    })
  }, [])

  const resetBalance = () => {
    const username = localStorage.getItem('username')
    userApi.resetBalance(username).then(() => {
      userApi.getBalance(username).then(balance => {
        setBalance(balance)
      })
    })
  }

  return (
    <Container>
      <CardBalance>
        <WrapTopic>
          <WalletBalance>Wallet balance</WalletBalance>
        </WrapTopic>
        <InlineWrap>
          <ValueBalance>{balance.toFixed(2)}</ValueBalance>
          <THB>THB</THB>
          <BtnCircle onClick={resetBalance}>+</BtnCircle>
        </InlineWrap>
        <HrCustom />
      </CardBalance>
      <ContainerItem>
        {transactions.map(transaction => (
          <ItemTransaction
            key={`transaction-${transaction.tid}`}
            {...transaction}
          />
        ))}
      </ContainerItem>
    </Container>
  )
}

export default Wallet

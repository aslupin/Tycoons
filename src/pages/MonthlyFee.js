import React, { useState, useEffect } from 'react'
import Container from '../common/Container'
import styled from 'styled-components'
import ItemTransaction from '../common/Item'
import transactionApi from '../apis/transaction'
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
const MonthlyFee = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    transactionApi.getHitory('New').then(transactions => {
      setTransactions(transactions)
    })
  }, [])

  return (
    <div>
      <CardBalance>
        <WrapTopic>
          <WalletBalance>Monthly Fee</WalletBalance>
        </WrapTopic>
        <div style={{ width: '100%' }}>
          <table
            style={{ width: '100%', marginLeft: '10px', marginRight: '10px' }}
          >
            <tbody>
              <tr>
                <td>รอบบิล</td>
                <td>กรกฎาคม 2562</td>
              </tr>
              <tr>
                <td>ค่าบริการ</td>
                <td>100.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBalance>
      <CardBalance style={{ position: 'relative' }}>
        <div
          style={{
            textAlign: 'left',
            width: '100%',
          }}
        >
          <div
            style={{
              paddingLeft: '10px',
              paddingRight: '10px',
            }}
          >
            <label style={{ display: 'block' }}>
              <input type="radio" />
              บัตรเครดิต
            </label>
            <label>
              <input type="radio" style={{ display: 'blocks' }} />
              Line pay
            </label>
          </div>
        </div>
      </CardBalance>
    </div>
  )
}

export default MonthlyFee

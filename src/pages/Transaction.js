import React, { useState, useEffect } from 'react'
import Container from '../common/Container'
import styled from 'styled-components'
import ItemTransaction from '../common/Item'
import transactionApi from '../apis/transaction'
import userApi from '../apis/user'
import Wallet from './Wallet'
import MonthlyFee from './MonthlyFee'

const Transaction = () => {
  const [loading, setLoading] = useState(true)
  const [isWallet, setIsWallet] = useState(false)

  useEffect(() => {
    const username = localStorage.getItem('username')
    userApi.getPaymentMethod(username).then(paymentMethod => {
      if (paymentMethod === 'immediately') {
        setIsWallet(true)
      } else {
        setIsWallet(false)
      }
      setLoading(false)
    })
  }, [])

  if (loading) {
    return null
  } else if (isWallet) {
    return <Wallet />
  } else {
    return <MonthlyFee />
  }
}

export default Transaction

import React, { useState, useEffect } from 'react'
import Container from '../common/Container'
import styled from 'styled-components'
import ItemTransaction from '../common/Item'
import transactionApi from '../apis/transaction'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

const CardBalance = styled.div`
  width: 90%;
  /* height: 220px; */
  border: 0.5px solid rgb(232, 231, 230, 0.12);
  border-radius: 10px;
  margin: 1rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(247, 243, 242);
  z-index: 10000;
  margin-bottom: 90px;
`
const WrapTopic = styled.div`
  width: 100%;
`
const WalletBalance = styled.p`
  color: #42403e;
  font-size: 20px;
  margin: 1em;
`

const WrapLine = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-right: 16px solid rgb(227, 150, 77);
`
const Text = styled.p`
  color: #585858;
  font-size: 14px;
  margin: 0.5rem 1.3rem;
`

const CostText = styled.p`
  color: #585858;
  font-size: 14px;
  margin: 0.5rem 1.3rem;
  border: 1px solid rgb(227, 150, 77);
  padding: 2px 4px;
  border-radius: 10px;
`

const RadioCustom = styled(Radio)`
  && {
    color: rgb(227, 150, 77);
    font-size: 14px;
  }
`

const RadioGroupCustom = styled(RadioGroup)`
  && {
    width: 90%;
    padding-left: 1rem;
    margin-top: 1rem;
    border-left: 16px solid rgb(227, 150, 77);
  }
`

const BtnPay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 72%;
  height: 90px;
  background-color: rgb(222, 202, 202);
  border-radius: 10px;
  position: absolute;
  top: 270px;
  border: 1px solid rgb(143, 141, 140, 0.2);
  cursor: pointer;
  &:hover {
    background-color: rgb(186, 168, 168);
  }
`
const TextBtnPay = styled.div`
  margin: 1.8rem;
  font-size: 18px;
`
const MonthlyFee = () => {
  const [transactions, setTransactions] = useState([])
  const [value, setValue] = React.useState('female')

  function handleChange(event) {
    setValue(event.target.value)
  }
  useEffect(() => {
    transactionApi.getHitory('New').then(transactions => {
      setTransactions(transactions)
    })
  }, [])

  return (
    <Container>
      <BtnPay>
        <TextBtnPay>จ่ายบิลรอบเดือน</TextBtnPay>
      </BtnPay>
      <CardBalance>
        <WrapTopic>
          <WalletBalance>Monthly Fee</WalletBalance>
        </WrapTopic>
        <WrapLine>
          <Text>รอบบิล:</Text>
          <Text>{`กรกฎาคม 2562`}</Text>
        </WrapLine>
        <WrapLine>
          <Text>ค่าบริการ:</Text>
          <CostText>{`104.00 THB`}</CostText>
        </WrapLine>
        <RadioGroupCustom
          aria-label="Gender"
          name="gender1"
          // className={classes.group}
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="credit"
            control={<RadioCustom />}
            label="บัตรเครดิต"
          />
          <FormControlLabel
            value="linepay"
            control={<RadioCustom />}
            label="LINE pay"
          />
        </RadioGroupCustom>
      </CardBalance>
    </Container>
  )
}

export default MonthlyFee

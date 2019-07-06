import React from 'react'
import styled from 'styled-components'
import IcBus from '../assets/ic_bus_stop.svg'
import IcWallet from '../assets/ic_wallet.svg'
import IcHome from '../assets/ic_home.svg'

const ContainerNavbar = styled.div`
  position: fixed;
  width: 100vw;
  height: 74px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-top: 0.5px solid rgb(0, 0, 0, 0.3);
  box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
`

const ItemNavbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Icon = styled.img`
  width: 36px;
  height: 36px;
  opacity: 0.57;
  cursor: pointer;
`

const Text = styled.div`
  font-size: 10px;
`

const Navbar = () => {
  return (
    <ContainerNavbar>
      <ItemNavbar>
        <Icon src={IcBus} />
        <Text>Bustop</Text>
      </ItemNavbar>
      <ItemNavbar>
        <Icon src={IcWallet} />
        <Text>Transaction</Text>
      </ItemNavbar>
      <ItemNavbar>
        <Icon src={IcHome} />
        <Text>Home</Text>
      </ItemNavbar>
    </ContainerNavbar>
  )
}
export default Navbar

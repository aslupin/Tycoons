import React, { useState } from 'react'
import styled from 'styled-components'
import IcBus from '../assets/ic_bus_stop.svg'
import IcWallet from '../assets/ic_wallet.svg'
import IcHome from '../assets/ic_home.svg'
import IcHoverBus from '../assets/ic_bus_stop_active.png'
import IcHoverWallet from '../assets/ic_wallet_active.png'
import IcHoverPromotion from '../assets/ic_promotion_active.png'
import IcPromotion from '../assets/ic_promotion.svg'
import { Link, NavLink } from 'react-router-dom'

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

const Text = styled.div`
  font-size: 10px;
`

const linkStyle = { textDecoration: 'none', color: 'inherit' }

// const Icon = styled.img`
//   width: 36px;
//   height: 36px;
//   opacity: 0.57;
//   cursor: pointer;
// `

const Icon = styled.div`
  width: 36px;
  height: 36px;
  opacity: 0.57;
  cursor: pointer;

  &.Bus {
    background-image: url(${IcBus});
  }

  &.Wallet {
    background-image: url(${IcWallet});
  }

  &.Prom {
    background-image: url(${IcPromotion});
  }
`

const NavbarMap = styled(NavLink)`
  &.selected ${Icon}.Bus {
    background-image: url(${IcHoverBus});
    background-size: cover;
  }
`
const NavbarTrans = styled(NavLink)`
  &.selected ${Icon}.Wallet {
    background-image: url(${IcHoverWallet});
    background-size: cover;
  }
`
const NavbarPromotion = styled(NavLink)`
  &.selected ${Icon}.Prom {
    background-image: url(${IcHoverPromotion});
    background-size: cover;
  }
`
const Navbar = () => {
  // const [paths, setPaths] = useState({
  //   icMap: IcBus,
  //   icTrans: IcWallet,
  //   icPro: IcPromotion,
  // })
  return (
    <ContainerNavbar>
      <NavbarMap
        to="/map"
        style={linkStyle}
        activeClassName="selected"
        // onClick={() =>
        //   setPaths({ icMap: IcHoverBus, icTrans: IcWallet, icPro: IcPromotion })
        // }
      >
        <ItemNavbar>
          <Icon src={IcBus} className="Bus" />
          <Text>Map</Text>
        </ItemNavbar>
      </NavbarMap>
      <NavbarTrans
        to="/transaction"
        style={linkStyle}
        activeClassName="selected"
        // onClick={() =>
        //   setPaths({ icMap: IcBus, icTrans: IcHoverWallet, icPro: IcPromotion })
        // }
      >
        <ItemNavbar>
          <Icon src={IcWallet} className="Wallet" />
          <Text>Transaction</Text>
        </ItemNavbar>
      </NavbarTrans>
      <NavbarPromotion
        to="/promotion"
        style={linkStyle}
        activeClassName="selected"
        // onClick={() =>
        //   setPaths({ icMap: IcBus, icTrans: IcWallet, icPro: IcHoverPromotion })
        // }
      >
        <ItemNavbar>
          <Icon src={IcPromotion} className="Prom" />
          <Text> Promotion</Text>
        </ItemNavbar>
      </NavbarPromotion>
      {/* <Link to="/" style={linkStyle}>
        <ItemNavbar>
          <Icon src={IcHome} />
          <Text>Home</Text>
        </ItemNavbar>
      </Link> */}
    </ContainerNavbar>
  )
}
export default Navbar

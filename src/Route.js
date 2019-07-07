import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import { Register, Success } from './features/form'
// import Register from './features/form/Register'
// import Success from './features/form/Success'
// import Home from './features/home/Home'
// import Filter from './features/filter/Filter'
// import Detail from './features/detail/Detail'
import App from './App'
import Transaction from './pages/Transaction'
import Login from './pages/Login'
import Promotion from './pages/Promotion'
import MonthlyFee from './pages/MonthlyFee'
import Map from './pages/Map'

export default () => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/transaction" exact component={Transaction} />
    <Route path="/login" exact component={Login} />
    <Route path="/map" exact component={Map} />
    <Route path="/promotion" exact component={Promotion} />
  </Switch>
)

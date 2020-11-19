import React,{useEffect} from 'react';

import styled from 'styled-components';

import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInUp from './pages/sign-in-up/sign-in-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import CoollectionPage from './pages/collection/collection.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import {selectCurrentUser} from './redux/user/user.selector'


const App = (props)=>{
  
  const {setCurrentUser} = props;

  useEffect(()=>{
    
    console.log('Aca iria la autenticación de usuario')
  },[]) //check user session

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render = {()=>props.currentUser ? (<Redirect to='/'/>): (<SignInUp /> )}/>
        <Route exact path= '/checkout' component={CheckoutPage}/>
      </Switch>
    </div>
  );

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


const mapDispatchToProps = dispatch =>({

  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
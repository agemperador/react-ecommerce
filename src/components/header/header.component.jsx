import React from 'react'

import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect'

import {ReactComponent as Logo} from '../../assets/icon.svg'

import {auth} from '../../firebase/firebase.utils'

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component.jsx'
import {selectCartHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'

import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles'

/* import './header.styles.scss'*/
const Header = ({ currentUser, hidden })=>(
    
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUser  ? (
                <OptionLink as='div' className='option' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                ):(
                <OptionLink className='option' to= '/signin'>
                    SIGN IN
                </OptionLink>
            )}       
            <CartIcon/>
            
        </OptionsContainer>
        {
        hidden ? null:  <CartDropdown/>
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);
import React from "react";

import { connect } from "react-redux";

import {compose} from 'redux'

import { selectCartItems } from "../../redux/cart/cart.selector";

import {toggleCartHidden} from '../../redux/cart/cart.actions'

import { createStructuredSelector } from "reselect";
import {withRouter} from 'react-router-dom'


import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {

    var total = 0;
    return (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
        cartItems.length ? (       
        cartItems.map((cartItem) => {
            total+=cartItem.quantity*cartItem.price
            return (
            <CartItem key={cartItem.id} item={cartItem} />
        )})
        ):(
            <span className='empty-message'> Your cart is empty</span>
            
        )}
        </div>
        <CustomButton onClick = {()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }} >
            GO TO CHECKOUT   ${total}
        </CustomButton>
    </div>
)};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});


export default compose (
                withRouter,
                connect(mapStateToProps)
                )(CartDropdown)

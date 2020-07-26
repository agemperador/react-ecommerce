import React from 'react'

import {connect} from 'react-redux'

import './cart-item.styles.scss'

import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart.actions';


const CartItem = ({item,clearItem,removeItem,addItem}) => {

    const {imageUrl, price, name, quantity} = item

    return(
    <div className='cart-item'>
        <img src={imageUrl} alt="item"/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                <div className='arrow button' onClick={()=>removeItem(item)}>&#10094;</div>
                <span>{quantity}</span> x <span>${price}</span>
                <div className='arrow button' onClick={()=>addItem(item)}>&#10095;</div>
            </span>
            <span className='options'>
                
                
                <div className='remove button' onClick={()=> clearItem(item)}>&#9876;</div>
            </span>
        </div>
    </div>
)};

const mapDispatchToProps = dispatch=>({
    clearItem: item =>dispatch(clearItemFromCart(item)),
    removeItem: item=>dispatch(removeItem(item)),
    addItem: item =>dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CartItem);


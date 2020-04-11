import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-buttom/custom-buttom.component';
import CartItem from '../cart-item/cart-item.components';
import './cart-dropdown.styles.scss';

const Cartdropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => 
            <CartItem key={cartItem.id} item={cartItem} />)
        }</div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps= ({cart: { cartItems }}) =>({
    cartItems
})

export default connect(mapStateToProps) (Cartdropdown);
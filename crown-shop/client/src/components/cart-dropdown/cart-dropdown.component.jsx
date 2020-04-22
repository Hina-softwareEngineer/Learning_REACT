import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-buttom/custom-buttom.component';
import CartItem from '../cart-item/cart-item.components';
import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const Cartdropdown = ({cartItems, history, dispatch}) => {
    

   return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
            cartItems.length ?
            cartItems.map(cartItem => 
            <CartItem key={cartItem.id} item={cartItem} />)
            : (
                <span className='empty-message'>Your Cart is empty</span>
            )
        }</div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
    }}>GO TO CHECKOUT</CustomButton>
    </div>
)
    }
const mapStateToProps= createStructuredSelector({
    cartItems: selectCartItems
})



export default withRouter(connect(mapStateToProps) (Cartdropdown));
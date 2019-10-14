import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../Components/CheckoutItem/checkoutItem.component';

const CheckoutPage = ({ cartItems, total }) => {
    return (
        <div className='checkoutPage'>
            <div className='checkoutHeader'>
                <div className='headerBlocks'>
                    <span className='columnText'>Product</span>
                </div>
                <div className='headerBlocks'>
                    <span className='columnText'>Description</span>
                </div>
                <div className='headerBlocks'>
                    <span className='columnText'>Quantity</span>
                </div>
                <div className='headerBlocks'>
                    <span className='columnText'>Price</span>
                </div>
                <div className='headerBlocks'>
                    <span className='columnText'>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);

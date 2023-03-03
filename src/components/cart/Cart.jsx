import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart);
    let quantity = 0;
    let total = 0;
    let shipping = 0;

    for (const cartData of cart) {
        quantity = quantity + cartData.quantity;
        total = cartData.price * quantity;
        shipping = 2 * quantity;
    }

    let Tax = total * 0.1;

    let grandTotal = total + shipping + parseFloat(Tax.toFixed(2));

    const remove = (quantity, total, shipping) => {
        quantity = 0;
        total = 0;
        shipping = 0;
    }
    return (
        <div>
            <h2>Your Orders</h2>
            <h6>Selected Items: {quantity}</h6>
            <h6>Total Price: ${total}</h6>
            <h6>Shipping Charge: ${shipping}</h6>
            <h6>Tax: ${Tax}</h6>
            <h4>Grand Total: ${grandTotal}</h4>
            <button id='remove' onClick={()=>remove(quantity,total,shipping)}>Delete Orders</button>
        </div>
    );
};

export default Cart;
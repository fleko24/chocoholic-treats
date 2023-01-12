import { React, useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'

import { ShopingIcon, CartIconContainer, ItemCount} from './cart-icon.style.jsx'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}> 
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount>{
          cartItems.reduce((acc, cv)=>acc + cv.quantity, 0)
        }
        </ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
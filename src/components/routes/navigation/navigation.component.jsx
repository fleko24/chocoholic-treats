import React from 'react'
import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { signOutUser } from '../../../utils/firebase/firebase.utils'
import CartIcon from '../../cart-icon/cart-icon.component'
import CartDropdown from '../../cart-dropdown/cart-dropdown.component'
import { UserContext } from '../../../context/user.context'
import { CartContext } from '../../../context/cart.context'
import { NavigationContainer, NavLinks, NavLink, LogoContainer, StyledLogo } from './navigation.style'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext); 
  return (
    <Fragment>  
         <NavigationContainer> 
            <LogoContainer to='/'>
              <StyledLogo/>
            </LogoContainer> 
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                <NavLink to='/about'>
                    ABOUT US
                </NavLink>
                <NavLink to='/contact'>
                    CONTACT
                </NavLink>
                {
                    currentUser ? 
                       (
                          <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                       )
                    :  ( 
                          <NavLink className='nav-link' to='/auth'>
                            SIGN IN
                          </NavLink>
                       )
                }
                <CartIcon />


            </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
    </Fragment>
  )
}

export default Navigation
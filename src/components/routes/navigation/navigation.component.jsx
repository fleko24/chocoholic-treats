import React from 'react'
import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../../assets/logo/logo.svg'
import { signOutUser } from '../../../utils/firebase/firebase.utils'
import CartIcon from '../../cart-icon/cart-icon.component'
import CartDropdown from '../../cart-dropdown/cart-dropdown.component'
import { UserContext } from '../../../context/user.context'
import { CartContext } from '../../../context/cart.context'
import './navigation.style.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext); 
  return (
    <Fragment>    
        <div className="navigation">
            <Link className='logo-container' to='/'>
               <Logo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/about'>
                    ABOUT US
                </Link>
                <Link className='nav-link' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ? 
                       (
                          <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                       )
                    :  ( 
                          <Link className='nav-link' to='/auth'>
                            SIGN IN
                          </Link>
                       )
                }
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        
        <Outlet />
    </Fragment>
  )
}

export default Navigation
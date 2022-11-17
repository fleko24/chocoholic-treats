import React from 'react'
import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../../assets/logo/logo.svg'
import './navigation.style.scss'

const Navigation = () => {
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
                <Link className='nav-link' to='/signin'>
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation
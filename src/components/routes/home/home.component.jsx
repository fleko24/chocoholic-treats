import React from 'react'
import { Outlet } from 'react-router-dom';
import Categories from '../../categories/categories.component';

const Home = () => {

  return (
    <>
        <Categories />
        <Outlet />
    </>
  )
}

export default Home
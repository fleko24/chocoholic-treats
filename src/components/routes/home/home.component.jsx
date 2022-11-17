import React from 'react'
import Categories from '../../categories/categories.component';

const Home = () => {

    const categories = [
        {
            id: 1,
            title: 'Gingerbread',
            imageUrl: 'images/gingerbread.jpg'
        },
        {
            id: 2,
            title: 'Cakes',
            imageUrl: '/images/cakes.jpg'
        },
        {
            id: 3,
            title: 'Biscuits',
            imageUrl: 'images/biscuits.jpg'
        },
        {
            id: 4,
            title: 'Fudges',
            imageUrl:'images/fudges.jpg'
        },
        {
            id: 5,
            title: 'Donuts',
            imageUrl: 'images/donuts.jpg'
        }
    ];  
  return (
    <Categories categories={categories}/>
  )
}

export default Home
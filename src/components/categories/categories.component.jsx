import React from 'react';
import CategoryItem from '../category-item/category-item.component';
import './categories.styles.scss';

const Categories = () => {

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
    <div className="categories-container">
      {
        categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
        ))
      }
    </div>
  )
}

export default Categories
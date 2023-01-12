import React from 'react';
import DirectoryItem from '../directory-item/directory-item.component';
import './categories.styles.scss';

const categories = [
  {
      id: 1,
      title: 'Gingerbread',
      imageUrl: 'images/gingerbread.jpg',
      route: 'shop/hats'
  },
  {
      id: 2,
      title: 'Cakes',
      imageUrl: '/images/cakes.jpg',
      route: 'shop/jackets'
  },
  {
      id: 3,
      title: 'Biscuits',
      imageUrl: 'images/biscuits.jpg',
      route: 'shop/mens'
  },
  {
      id: 4,
      title: 'Fudges',
      imageUrl:'images/fudges.jpg',
      route: 'shop/sneakers'
  },
  {
      id: 5,
      title: 'Donuts',
      imageUrl: 'images/donuts.jpg',
      route: 'shop/womens'
  }
];  

const Categories = () => {

  return (
    <div className="categories-container">
      {
        categories.map((category) => (
          <DirectoryItem key={category.id} category={category}/>
        ))
      }
    </div>
  )
}

export default Categories
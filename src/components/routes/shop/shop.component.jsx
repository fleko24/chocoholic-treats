import { useContext, React } from 'react';
import { Routes, Route } from 'react-router';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.style.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop

/**
 * <Fragment key={title}>
    <h2>{title}</h2>
    <div className='products-container'>
      {categoriesMap[title].map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </Fragment>
 */
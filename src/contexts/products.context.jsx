import { useState, createContext, useEffect } from 'react';

import { getDocumentsAndCategories } from '../utils/firebase/firebase.utils.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getDocumentsAndCategories();
      console.log(categoryMap);
    };
    getCategoryMap();
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

import { createContext } from 'react';
import useFetch from '../hooks/useFetch';
import PropTypes from 'prop-types';

const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const url = 'https://fakestoreapi.com/products/categories';

  const [categoryList] = useFetch(url);

  return <CategoryContext.Provider value={categoryList}>{children}</CategoryContext.Provider>;
}

CategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CategoryContext, CategoryProvider };

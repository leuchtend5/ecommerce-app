import { Link, useParams, useSearchParams } from 'react-router-dom';
import { CategoryContext } from '../../context/CategoryContext';
import { useContext, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import useFetch from '../../hooks/useFetch';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import {
  ProductContainer,
  FirstSection,
  HeroImage,
  ImageOverlay,
  SecondSection,
  CategorySection,
  ItemsSection,
} from './styles';
import heroImage from '../../assets/images/hero/hero-image-product.webp';
import ProductsList from '../../components/ProductsList';
import SortItems from '../../components/SortItems';
import sortDataProduct from '../../utils/sortDataProduct';
import filterProductsBySearch from '../../utils/filterProductsBySearch';

export default function Products() {
  let { category } = useParams(); // get category route parameter
  if (!category) category = 'all categories'; // set as default parameter

  const urlCategories = {
    'all categories': 'https://fakestoreapi.com/products',
    electronics: 'https://fakestoreapi.com/products/category/electronics',
    jewelery: 'https://fakestoreapi.com/products/category/jewelery',
    "men's clothing": "https://fakestoreapi.com/products/category/men's%20clothing",
    "women's clothing": "https://fakestoreapi.com/products/category/women's%20clothing",
  };
  const categoryList = useContext(CategoryContext);
  const [dataProduct, isLoading] = useFetch(urlCategories[category || 'all categories']);
  const [sortValue, setSortValue] = useState('Price: High-Low');
  const [searchParams] = useSearchParams();
  const getSearchParams = searchParams.get('search'); // get search query from route
  const searchResult = filterProductsBySearch(getSearchParams, dataProduct); // filter dataProduct by search param

  // callback function to get sort value from sortItem component
  function getSortValue(data) {
    setSortValue(data);
  }

  return (
    <ProductContainer>
      <FirstSection>
        <ImageOverlay />
        <HeroImage src={heroImage} alt="hero image" />
      </FirstSection>
      <SecondSection>
        <CategorySection>
          <p>Categories</p>
          <div>
            {!categoryList ? (
              <Skeleton count={5} width={150} containerClassName="skeleton" baseColor="#d1d1d1" />
            ) : (
              ['all categories', ...categoryList].map((cat) => (
                <Link
                  to={`/products/category/${cat}`}
                  key={cat}
                  className={`nav-link ${cat === category ? 'selected' : ''}`}
                >
                  {capitalizeFirstLetter(cat)}
                </Link>
              ))
            )}
          </div>
        </CategorySection>
        <ItemsSection>
          <div>
            {getSearchParams === null ? (
              <div></div>
            ) : (
              <p>
                Search result for : <span className="search-result">"{getSearchParams}"</span>{' '}
                <span className="search-result">({searchResult.length})</span>
              </p>
            )}

            <SortItems getSortValue={getSortValue} />
          </div>
          {isLoading ? (
            <Skeleton
              count={4}
              width={200}
              height={300}
              containerClassName="skeleton"
              baseColor="#d1d1d1"
            />
          ) : (
            // Display dataProduct if there are no search parameters
            // Otherwise, display filtered dataProduct based on the search parameters
            <ProductsList
              data={sortDataProduct(
                sortValue,
                getSearchParams !== null ? searchResult : dataProduct,
                dataProduct,
              )}
            />
          )}
        </ItemsSection>
      </SecondSection>
    </ProductContainer>
  );
}

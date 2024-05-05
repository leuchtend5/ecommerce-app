import { Link, useParams } from 'react-router-dom';
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
  Container,
} from './styles';
import heroImage from '../../assets/images/hero/hero-image-product.webp';
import ProductsList from '../../components/ProductsList';
import SortItems from '../../components/SortItems';

export default function Products() {
  let { category } = useParams();
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

  function getSortValue(data) {
    setSortValue(data);
  }

  function sortDataProduct(value) {
    const sortFunction = {
      'Price: High-Low': (a, b) => b.price - a.price,
      'Price: Low-High': (a, b) => a.price - b.price,
      'Selling Count': (a, b) => b.rating.count - a.rating.count,
      'Name: A-Z': (a, b) => a.title.localeCompare(b.title),
      'Name: Z-A': (a, b) => b.title.localeCompare(a.title),
    };

    if (dataProduct !== null) {
      return [...dataProduct].sort(sortFunction[value]);
    }

    return [];
  }

  return (
    <ProductContainer>
      <FirstSection>
        <ImageOverlay />
        <HeroImage src={heroImage} alt="hero image" />
      </FirstSection>
      <SecondSection>
        <div>
          <p>Categories</p>
          <SortItems getSortValue={getSortValue} />
        </div>
        <Container>
          <div className="category-section">
            {!categoryList ? (
              <Skeleton count={5} width={80} />
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
          {isLoading ? (
            <Skeleton
              count={3}
              width={200}
              height={300}
              containerClassName="skeleton"
              baseColor="#d1d1d1"
            />
          ) : (
            <ProductsList data={sortDataProduct(sortValue)} />
          )}
        </Container>
      </SecondSection>
    </ProductContainer>
  );
}

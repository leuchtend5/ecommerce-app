import {
  ImageOverlay,
  HeroImage,
  HomeContainer,
  FirstSection,
  SecondSection,
  WelcomeTextContainer,
} from './styles';
import heroImage from '../../assets/images/hero/hero-image.webp';
import { ProductCard, CategoryCard } from '../../components/Card';
import useFetch from '../../hooks/useFetch';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

export default function Home() {
  const urlCategories = 'https://fakestoreapi.com/products/categories';
  const urlAllProducts = 'https://fakestoreapi.com/products';

  const [dataCategory] = useFetch(urlCategories);
  const [dataProduct] = useFetch(urlAllProducts);

  function filterBySellCount(data) {
    return data.filter((item) => item.rating.count > 400);
  }

  return (
    <HomeContainer>
      <FirstSection>
        <ImageOverlay />
        <HeroImage src={heroImage} alt="hero image" />
        <WelcomeTextContainer>
          <p>Welcome to Good Store</p>
          <div>
            <p>Discover fashion and electronics at their finest</p>
            <p>Start exploring now!</p>
          </div>
          <Link to={'/products'}>
            <button>Shop Now</button>
          </Link>
        </WelcomeTextContainer>
      </FirstSection>
      <SecondSection>
        <h1>Categories</h1>
        <div className="card-container">
          {!dataCategory ? (
            <Skeleton
              height={300}
              width={230}
              count={4}
              containerClassName="skeleton-row"
              baseColor="#d1d1d1"
              inline="true"
            />
          ) : (
            dataCategory.map((category) => {
              return (
                <CategoryCard
                  key={category}
                  category={category}
                  route={`/products/category/${category}`}
                />
              );
            })
          )}
        </div>
      </SecondSection>
      <SecondSection>
        <h1>Best Sellers</h1>
        <div className="card-container">
          {!dataProduct ? (
            <Skeleton
              height={300}
              width={230}
              count={4}
              containerClassName="skeleton-row"
              baseColor="#d1d1d1"
              inline="true"
            />
          ) : (
            filterBySellCount(dataProduct).map((item) => (
              <ProductCard
                key={item.id}
                image={item.image}
                name={item.title}
                price={item.price}
                rate={item.rating.rate}
                count={item.rating.count}
                route={`/product/${item.id}`}
              />
            ))
          )}
        </div>
      </SecondSection>
    </HomeContainer>
  );
}

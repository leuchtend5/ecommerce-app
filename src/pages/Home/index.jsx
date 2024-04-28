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
          <button>Shop Now</button>
        </WelcomeTextContainer>
      </FirstSection>
      <SecondSection>
        <h1>Shop By Category</h1>
        <div className="card-container">
          {!dataCategory ? (
            <h1>loading ...</h1>
          ) : (
            dataCategory.map((category, index) => <CategoryCard key={index} category={category} />)
          )}
        </div>
      </SecondSection>
      <SecondSection>
        <h1>Best Sellers</h1>
        <div className="card-container">
          {!dataProduct ? (
            <h1>loading ...</h1>
          ) : (
            filterBySellCount(dataProduct).map((item, index) => (
              <ProductCard
                key={index}
                image={item.image}
                name={item.title}
                price={item.price}
                rate={item.rating.rate}
              />
            ))
          )}
        </div>
      </SecondSection>
    </HomeContainer>
  );
}

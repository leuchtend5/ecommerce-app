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
  const url = 'https://fakestoreapi.com/products/categories';
  const [data] = useFetch(url);

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
          {!data ? (
            <h1>loading ...</h1>
          ) : (
            data.map((category, index) => <CategoryCard key={index} category={category} />)
          )}
        </div>
      </SecondSection>
      <SecondSection>
        <h1>Best Sellers</h1>
        <div className="card-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </SecondSection>
    </HomeContainer>
  );
}

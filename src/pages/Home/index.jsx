import {
  ImageOverlay,
  HeroImage,
  HomeContainer,
  FirstSection,
  SecondSection,
  WelcomeTextContainer,
} from './styles';
import heroImage from '../../assets/images/hero-image.webp';
import { ProductCard, CategoryCard } from '../../components/Card';

export default function Home() {
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
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
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

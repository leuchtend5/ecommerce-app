import {
  ProductContainer,
  FirstSection,
  HeroImage,
  ImageOverlay,
  SecondSection,
  Container,
} from './styles';
import heroImage from '../../assets/images/hero/hero-image-product.webp';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { ProductCard } from '../../components/Card';

export default function Products() {
  return (
    <ProductContainer>
      <FirstSection>
        <ImageOverlay />
        <HeroImage src={heroImage} alt="hero image" />
      </FirstSection>
      <SecondSection>
        <div>
          <p>Categories</p>
          <p>
            Sort By <RiArrowDropDownLine size={30} />
          </p>
        </div>
        <Container>
          <div className="category-section">
            <p>Electronics</p>
            <p>Jewelery</p>
            <p>Men's clothing</p>
            <p>Women's clothing</p>
          </div>
          <div className="product-section">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Container>
      </SecondSection>
    </ProductContainer>
  );
}

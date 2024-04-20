import { ProductContainer, FirstSection, HeroImage } from './styles';
import heroImage from '../../assets/images/hero-image-product.webp';

export default function Products() {
  return (
    <ProductContainer>
      <FirstSection>
        <HeroImage src={heroImage} alt="hero image" />
      </FirstSection>
    </ProductContainer>
  );
}

import heroImage from '../../assets/images/hero/hero-image-product.webp';
import { Container, FirstSection, HeroImage, ImageOverlay, SecondSection } from './styles';
import dummy from '../../assets/images/dummy.jpg';

export default function SingleProduct() {
  return (
    <Container>
      <FirstSection>
        <ImageOverlay />
        <HeroImage src={heroImage} alt="hero image" />
      </FirstSection>
      <SecondSection>
        <img src={dummy} alt="" />
        <div className="item-info">
          <div>Item name</div>
          <div>Item category</div>
          <div>Rate</div>
        </div>
        <div className="item-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora excepturi iure.
          Magni, expedita cum illo saepe molestiae laboriosam accusamus ullam eos tenetur tempora
          commodi, laborum eius optio doloribus repudiandae!
        </div>
        <div className="item-action">
          <div>qty</div>
          <button>Add to cart</button>
        </div>
      </SecondSection>
    </Container>
  );
}

import styled from 'styled-components';

const ProductContainer = styled.body`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const FirstSection = styled.section`
  position: relative;
`;

const ImageOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)),
    linear-gradient(0deg, rgba(238, 238, 238, 1) 0%, rgba(238, 238, 238, 0.2) 0%);
  position: absolute;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const SecondSection = styled.section`
  height: 1000px;
  padding: 0px 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;

    & > p:nth-child(1) {
      font-size: 1.8rem;
      font-weight: bold;
    }

    & > p:nth-child(2) {
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }

  .category-section {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 1.1rem;

    & > p {
      cursor: pointer;
    }
  }

  .product-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    padding-left: 40px;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

export { ProductContainer, FirstSection, HeroImage, ImageOverlay, SecondSection, Container };

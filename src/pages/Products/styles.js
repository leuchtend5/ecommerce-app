import styled from 'styled-components';

const ProductContainer = styled.body`
  display: flex;
  flex-direction: column;
`;

const FirstSection = styled.section`
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export { ProductContainer, FirstSection, HeroImage };

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-bottom: 200px;
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
  padding: 0 max(20vw, 100px);
  display: flex;

  img {
    width: 200px;
  }
`;

export { Container, FirstSection, HeroImage, ImageOverlay, SecondSection };

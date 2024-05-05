import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-bottom: 200px;
`;

const ImageOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0)) /* overlay dark */,
    linear-gradient(0deg, rgba(238, 238, 238, 1) 2%, rgba(238, 238, 238, 0.1) 15%); /* fading to background */
  position: absolute;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FirstSection = styled.section`
  height: 100vh;
  position: relative;
`;

const WelcomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 35%;
  left: 15%;
  color: white;

  & > p {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100%;
    font-family: title-font;
    font-size: 3rem;
  }

  div {
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
    width: 150px;
    height: 35px;
    border: 1px solid white;
    color: white;
    border-radius: 12px;
    font-size: 1.1rem;
    background-color: transparent;

    &:hover {
      background-color: white;
      color: black;
    }

    &:active {
      background-color: white;
      color: black;
      filter: brightness(80%);
    }
  }
`;

const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  font-size: 2.5rem;
  align-items: center;

  .card-container {
    display: flex;
    gap: 80px;
    flex-wrap: wrap;

    a {
      text-decoration: none;

      &:visited {
        color: black;
      }
    }
  }

  .skeleton-row {
    display: flex;
    gap: 20px;
  }
`;

export {
  HeroImage,
  ImageOverlay,
  HomeContainer,
  FirstSection,
  SecondSection,
  WelcomeTextContainer,
};

import styled from 'styled-components';
import { devices } from '../../utils/breakpoints';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 80px;
  gap: 60px;

  @media screen and (${devices['tablet-lg']}) {
    margin-bottom: 200px;
    gap: 100px;

    object-position: center;
  }
`;

const ImageOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)) /* overlay dark */,
    linear-gradient(0deg, rgba(238, 238, 238, 1) 2%, rgba(238, 238, 238, 0.1) 15%); /* fading to background */
  position: absolute;
`;

const HeroImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 80% 20%;

  @media screen and (${devices.tablet}) {
    object-position: center;
  }
`;

const FirstSection = styled.section`
  height: 100vh;
  position: relative;
`;

const WelcomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  align-items: center;
  transition: all 0.35s ease;

  & > p {
    display: flex;
    align-items: center;
    font-family: title-font;
    font-size: 2.1rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  div {
    font-size: 1.1rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  @media screen and (${devices['tablet-lg']}) {
    & > p {
      font-size: 3rem;
    }

    div {
      font-size: 1.6rem;
    }
  }

  @media screen and (${devices.desktop}) {
    top: 35%;
    left: 15%;
    transform: none;
  }

  button {
    cursor: pointer;
    width: 150px;
    height: 35px;
    border: 1px solid white;
    color: white;
    border-radius: 12px;
    font-size: 1rem;
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
  font-size: 1.5rem;
  align-items: center;
  text-align: center;
  padding: 0 30px;
  transition: font-size 0.3s ease;

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 40px;
    width: 100%;

    a {
      text-decoration: none;
      margin-inline: auto;
      color: black;

      &:visited {
        color: black;
      }
    }
  }

  .skeleton-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 40px;
    justify-items: center;
  }

  @media screen and (${devices.tablet}) {
    padding: 0 14vw;

    .card-container {
      gap: 80px;
    }
  }

  @media screen and (${devices['tablet-lg']}) {
    padding: 0 18vw;
    font-size: 2.2rem;
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

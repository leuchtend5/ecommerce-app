import styled from 'styled-components';
import { devices } from '../../utils/breakpoints';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  gap: 60px;

  @media screen and (${devices['tablet-lg']}) {
    gap: 100px;
    margin-bottom: 200px;
  }
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
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (${devices['tablet-lg']}) {
    flex-direction: row;
    gap: 30px;
    padding: 0 12vw;
  }

  @media screen and (${devices.desktop}) {
    padding: 0 20vw;
    justify-content: center;
  }
`;

const CategorySection = styled.div`
  padding: 10px;
  overflow-x: scroll;
  scrollbar-width: thin;
  background-color: #e3e1e1;

  p {
    display: none;
  }

  & > div:nth-child(2) {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
  }

  .nav-link {
    list-style: none;
    cursor: pointer;
    font-size: 1.1rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: black;
    padding: 3px 6px;
    border-radius: 4px;
    white-space: nowrap;

    &:hover {
      background-color: #e3e1e1;
    }

    &:visited {
      color: black;
    }

    &.selected {
      background-color: #d4d4d4;
      font-weight: bolder;
    }
  }

  .skeleton {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (${devices['tablet-lg']}) {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    gap: 25px;
    background-color: inherit;
    overflow-x: inherit;
    padding: 0 25px;

    & > div:nth-child(2) {
      flex-direction: column;
      align-items: start;
    }

    .nav-link {
      width: 100%;
      font-size: 1.2rem;
    }

    p {
      display: block;
      font-size: 1.8rem;
      font-weight: bold;
    }

    .skeleton {
      flex-direction: column;
    }
  }
`;

const ItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  padding: 0 30px;
  width: 100%;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 100%;
  }

  & > div:nth-child(2) {
    width: 100%;
  }

  a {
    text-decoration: none;
    margin-inline: auto;
    color: black;

    &:visited {
      color: black;
    }
  }

  .skeleton {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .search-result {
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media screen and (${devices.tablet}) {
    & > div:nth-child(1) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media screen and (${devices['tablet-lg']}) {
    padding: 0;
  }
`;

export {
  ProductContainer,
  FirstSection,
  HeroImage,
  ImageOverlay,
  SecondSection,
  CategorySection,
  ItemsSection,
};

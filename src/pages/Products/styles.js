import styled from 'styled-components';

const ProductContainer = styled.div`
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
  padding: 0px 100px;
  display: flex;
`;

const CategorySection = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-size: 1.1rem;
  padding-right: 50px;

  p {
    font-size: 1.8rem;
    font-weight: bold;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .nav-link {
    list-style: none;
    cursor: pointer;
    font-size: 1.2rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: black;
    padding: 3px 6px;
    border-radius: 4px;

    &:hover {
      background-color: #e3e1e1;
    }

    &:visited {
      color: black;
    }

    &.selected {
      background-color: #e3e1e1;
    }
  }
`;

const ItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 25px;

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    padding-left: 40px;
    align-items: center;
  }

  .skeleton {
    display: flex;
    gap: 20px;
    padding-left: 40px;
  }

  .search-result {
    font-size: 1.2rem;
    font-weight: bold;
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

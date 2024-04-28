import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: white;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s ease;
  width: min-content;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 24px 0px;
    filter: brightness(95%);
  }

  img {
    width: 200px;
    object-fit: contain;
    aspect-ratio: 16 / 18;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    font-size: 1rem;
    font-weight: bold;
    width: 100%;
    height: 100%;
    padding: 0 10px;

    & > div:nth-child(1) {
      text-align: center;
      font-weight: bold;
      font-size: 1.1rem;
    }

    & > div:nth-child(2) {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      gap: 15px;
      align-items: center;
      width: 100%;
    }
  }

  button {
    padding: 4px 8px;
    cursor: pointer;
    background-color: black;
    border: none;
    border-radius: 6px;
    color: white;
    width: fit-content;

    &:hover {
      filter: brightness(90%);
      background-color: grey;
    }
  }
`;

const StyledProductCard = styled(StyledCard)`
  .product-rate {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .product-info {
    display: flex;
    gap: 30px;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

const StyledCategoryCard = styled(StyledCard)`
  .container {
    width: auto;
    justify-content: center;
    align-items: center;
  }
`;

export { StyledCategoryCard, StyledProductCard };

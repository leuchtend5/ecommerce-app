import styled from 'styled-components';
import { devices } from '../../utils/breakpoints';

const StyledCard = styled.div`
  background-color: white;
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.3s ease;
  height: 100%;
  max-width: 250px;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 24px 0px;
    filter: brightness(95%);
  }

  .card-img {
    object-fit: contain;
    aspect-ratio: 16 / 12;
    width: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    font-size: 1rem;
    height: 100%;

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
    padding: 6px 10px;
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

  @media screen and (${devices.desktop}) {
    button {
      font-size: 1rem;
    }
  }
`;

const StyledProductCard = styled(StyledCard)`
  .product-rate {
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
    font-size: 1.1rem;
  }
`;

export { StyledCard, StyledProductCard };

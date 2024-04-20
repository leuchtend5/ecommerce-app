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

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 24px 0px;
    filter: brightness(95%);
  }

  img {
    width: 200px;
  }

  .container {
    display: flex;
    gap: 10px;
    flex-direction: column;
    font-size: 1rem;
    width: 100%;
    padding: 0 10px;
  }

  button {
    padding: 4px 8px;
    cursor: pointer;
    background-color: black;
    border: none;
    border-radius: 6px;
    color: white;

    &:hover {
      filter: brightness(90%);
      background-color: grey;
    }
  }
`;

const StyledProductCard = styled(StyledCard)`
  .productRate {
    font-size: 1rem;
  }

  .productName {
    font-weight: bold;
    font-size: 1.1rem;
  }

  .firstRow,
  .secondRow {
    display: flex;
    gap: 30px;
    justify-content: space-between;
    align-items: center;
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

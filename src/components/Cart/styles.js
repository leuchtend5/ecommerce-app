import styled from 'styled-components';

const CartContainer = styled.div`
  font-size: 1.7rem;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .bubble {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default CartContainer;

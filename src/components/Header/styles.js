import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  width: 100%;
  z-index: 2;
  backdrop-filter: ${({ blurActive }) => (blurActive ? 'blur(5px) brightness(0.8)' : 'none')};
  transition: backdrop-filter 0.35s ease;

  img {
    cursor: pointer;
  }
`;

export default HeaderContainer;

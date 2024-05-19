import styled from 'styled-components';
import { devices } from '../../utils/breakpoints';

const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px;
  width: 100%;
  z-index: 20;
  backdrop-filter: ${({ blurActive }) => (blurActive ? 'blur(5px) brightness(0.8)' : 'none')};
  transition: all 0.35s ease;

  @media screen and (${devices.tablet}) {
    padding: 20px 40px;
  }

  img {
    cursor: pointer;
    width: 6rem;
  }

  @media screen and (${devices.desktop}) {
    img {
      width: 8rem;
    }
  }
`;

export { HeaderContainer };

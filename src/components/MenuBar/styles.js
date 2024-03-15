import styled from 'styled-components';

const MenuBarContainer = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const StyledMenu = styled.ul`
  display: flex;
  gap: 30px;

  li {
    list-style: none;
    cursor: pointer;
    font-size: 1.2rem;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom-color: white;
    }
  }
`;

export { MenuBarContainer, StyledMenu };

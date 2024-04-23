import styled from 'styled-components';

const MenuBarContainer = styled.nav`
  display: flex;
  gap: 50px;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const StyledMenu = styled.ul`
  display: flex;
  gap: 50px;

  .nav-link {
    list-style: none;
    cursor: pointer;
    font-size: 1.2rem;
    border-bottom: 1px solid transparent;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      border-bottom-color: white;
      filter: brightness(80%);
    }

    &:visited {
      color: white;
    }
  }
`;

export { MenuBarContainer, StyledMenu };

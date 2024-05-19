import styled from 'styled-components';
import { devices } from '../../utils/breakpoints';
import { RxHamburgerMenu } from 'react-icons/rx';

const MenuBarContainer = styled.nav`
  display: flex;
  gap: 35px;
  align-items: center;

  @media screen and (${devices.tablet}) {
    gap: 50px;
  }
`;

const StyledMenu = styled.ul`
  display: none;

  @media screen and (${devices['tablet-lg']}) {
    display: flex;
    gap: 60px;
  }

  .nav-link {
    list-style: none;
    cursor: pointer;
    font-size: 1.2rem;
    border-bottom: 1px solid transparent;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: white;

    &:hover {
      border-bottom-color: white;
    }

    &:visited {
      color: white;
    }
  }
`;

const StyledSearchBar = styled.div`
  display: none;

  @media screen and (${devices['tablet-lg']}) {
    display: flex;
  }
`;

const HamburgerIcon = styled(RxHamburgerMenu)`
  font-size: 2rem;
  cursor: pointer;

  @media screen and (${devices['tablet-lg']}) {
    display: none;
  }
`;

export { MenuBarContainer, StyledMenu, StyledSearchBar, HamburgerIcon };

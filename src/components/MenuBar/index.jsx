import Cart from '../Cart';
import { MenuBarContainer, StyledMenu, StyledSearchBar, HamburgerIcon } from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DropdownMenu from '../DropdownMenu';
import SearchBar from '../SearchBar';

export default function MenuBar() {
  const [dropdownToggle, setDropdownToggle] = useState(false);

  function handleDropdownToggle() {
    setDropdownToggle(!dropdownToggle);
  }

  return (
    <MenuBarContainer>
      <StyledMenu>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="products" className="nav-link">
          Products
        </Link>
        <a href="#footer" className="nav-link">
          Contact
        </a>
      </StyledMenu>
      <StyledSearchBar>
        <SearchBar />
      </StyledSearchBar>
      <Cart />
      <HamburgerIcon onClick={handleDropdownToggle} />
      <DropdownMenu toggle={handleDropdownToggle} open={dropdownToggle} />
    </MenuBarContainer>
  );
}

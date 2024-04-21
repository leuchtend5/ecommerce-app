import SearchBar from '../SearchBar';
import Cart from '../Cart';
import { MenuBarContainer, StyledMenu } from './styles';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  return (
    <MenuBarContainer>
      <StyledMenu>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="products" className="nav-link">
          Products
        </Link>
        <Link to="/" className="nav-link">
          Contact
        </Link>
      </StyledMenu>
      <div>
        <SearchBar />
        <Cart />
      </div>
    </MenuBarContainer>
  );
}

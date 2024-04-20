import SearchBar from '../SearchBar';
import Cart from '../Cart';
import { MenuBarContainer, StyledMenu } from './styles';

export default function MenuBar() {
  return (
    <MenuBarContainer>
      <StyledMenu>
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </StyledMenu>
      <div>
        <SearchBar />
        <Cart />
      </div>
    </MenuBarContainer>
  );
}

import { DropdownContainer, CloseButton, StyledSearchBar, Overlay } from './styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function DropdownMenu({ toggle, open }) {
  return (
    <>
      <Overlay $open={open} onClick={toggle} />
      <DropdownContainer $open={open}>
        <CloseButton onClick={toggle} />
        <div>
          <StyledSearchBar toggle={toggle} />
          <Link to="/" className="nav-link" onClick={toggle}>
            <div>Home</div>
          </Link>
          <Link to="/products" className="nav-link" onClick={toggle}>
            <div>Products</div>
          </Link>
          <a href="#footer" className="nav-link" onClick={toggle}>
            <div>Contact</div>
          </a>
        </div>
      </DropdownContainer>
    </>
  );
}

DropdownMenu.propTypes = {
  toggle: PropTypes.func,
  open: PropTypes.bool,
};

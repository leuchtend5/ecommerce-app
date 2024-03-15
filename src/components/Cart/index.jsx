import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartContainer from './styles';

export default function Cart() {
  return (
    <CartContainer>
      <FontAwesomeIcon icon={faCartShopping} />
      <div className="bubble">2</div>
    </CartContainer>
  );
}

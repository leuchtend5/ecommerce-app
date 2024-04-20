import CartContainer from './styles';
import { IoCart } from 'react-icons/io5';

export default function Cart() {
  return (
    <CartContainer>
      <IoCart />
      <div className="bubble">2</div>
    </CartContainer>
  );
}

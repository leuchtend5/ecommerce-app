import dummy from '../../assets/images/dummy.jpg';
import { StyledCategoryCard, StyledProductCard } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function CategoryCard() {
  return (
    <StyledCategoryCard>
      <img src={dummy} alt="" />

      <div className="container">
        <div>Category</div>
        <button>Shop now</button>
      </div>
    </StyledCategoryCard>
  );
}

function ProductCard() {
  return (
    <StyledProductCard>
      <img src={dummy} alt="" />

      <div className="container">
        <div className="firstRow">
          <p className="productName">Dummy</p>
          <div className="productRate">
            <FontAwesomeIcon icon={faStar} /> 3.9
          </div>
        </div>
        <div className="secondRow">
          <p className="productPrice">$100.00</p>
          <button>Add to cart</button>
        </div>
      </div>
    </StyledProductCard>
  );
}

export { CategoryCard, ProductCard };

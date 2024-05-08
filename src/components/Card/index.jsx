import jewelry from '../../assets/images/category/jewelry.webp';
import men_cloth from '../../assets/images/category/men_clothing.webp';
import women_cloth from '../../assets/images/category/women_clothing.webp';
import electronic from '../../assets/images/category/electronics.webp';
import { StyledCategoryCard, StyledProductCard } from './styles';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import { Link } from 'react-router-dom';

function getCategoryImg(category) {
  switch (category) {
    case 'electronics':
      return electronic;
    case 'jewelery':
      return jewelry;
    case "men's clothing":
      return men_cloth;
    case "women's clothing":
      return women_cloth;
  }
}

function CategoryCard({ category, route }) {
  return (
    <Link to={route}>
      <StyledCategoryCard>
        <img src={getCategoryImg(category)} alt="" />

        <div className="container">
          <div>{capitalizeFirstLetter(category)}</div>
        </div>
      </StyledCategoryCard>
    </Link>
  );
}

function ProductCard({ image, name, price, rate }) {
  return (
    <StyledProductCard>
      <img src={image} alt="" />
      <div className="container">
        <div>{name}</div>
        <div>
          <div className="product-info">
            <p className="product-price">${price}</p>
            <div className="product-rate">
              <FaStar /> {rate}
            </div>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </StyledProductCard>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.string,
  route: PropTypes.string,
};

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  rate: PropTypes.number,
};

export { CategoryCard, ProductCard };

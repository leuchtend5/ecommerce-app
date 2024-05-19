import jewelry from '../../assets/images/category/jewelry.webp';
import men_cloth from '../../assets/images/category/men_clothing.webp';
import women_cloth from '../../assets/images/category/women_clothing.webp';
import electronic from '../../assets/images/category/electronics.webp';
import { StyledCard, StyledProductCard } from './styles';
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
      <StyledCard>
        <img src={getCategoryImg(category)} alt="" className="card-img" />

        <div className="container">
          <div>{capitalizeFirstLetter(category)}</div>
        </div>
      </StyledCard>
    </Link>
  );
}

function ProductCard({ image, name, price, rate, count, route }) {
  return (
    <Link to={route}>
      <StyledProductCard>
        <img src={image} alt="" className="card-img" />
        <div className="container">
          <div>{name}</div>
          <div>
            <div className="product-info">
              <p className="product-price">${price}</p>
              <div className="product-rate">
                <FaStar /> {rate} ({count})
              </div>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </StyledProductCard>
    </Link>
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
  count: PropTypes.number,
  route: PropTypes.string,
};

export { CategoryCard, ProductCard };

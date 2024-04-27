import dummy from '../../assets/images/dummy.jpg';
import jewelry from '../../assets/images/category/jewelry.webp';
import men_cloth from '../../assets/images/category/men_clothing.webp';
import women_cloth from '../../assets/images/category/women_clothing.webp';
import electronic from '../../assets/images/category/electronics.webp';
import { StyledCategoryCard, StyledProductCard } from './styles';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

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

function capitalizeFirstLetter(string) {
  const split = string.split(' ');
  const newString = [];

  split.forEach((word) => {
    const newWord = word.charAt(0).toUpperCase() + word.slice(1);
    newString.push(newWord);
  });

  const result = newString.join(' ');
  return result;
}

function CategoryCard({ category }) {
  return (
    <StyledCategoryCard>
      <img src={getCategoryImg(category)} alt="" />

      <div className="container">
        <div>{capitalizeFirstLetter(category)}</div>
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
        <div className="first-row">
          <p className="product-name">Dummy</p>
          <div className="product-rate">
            <FaStar /> 3.9
          </div>
        </div>
        <div className="second-row">
          <p className="product-price">$100.00</p>
          <button>Add to cart</button>
        </div>
      </div>
    </StyledProductCard>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.string,
};

export { CategoryCard, ProductCard };

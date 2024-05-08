import { ProductSection } from './styles';
import { ProductCard } from '../Card';
import PropTypes from 'prop-types';

export default function ProductsList({ data }) {
  return (
    <ProductSection>
      {data.length === 0 ? (
        <h2>Not Found</h2>
      ) : (
        data.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            name={item.title}
            price={item.price}
            rate={item.rating.rate}
          />
        ))
      )}
    </ProductSection>
  );
}

ProductsList.propTypes = {
  data: PropTypes.array,
};

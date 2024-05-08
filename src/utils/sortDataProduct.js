export default function sortDataProduct(value, dataProduct) {
  const sortFunction = {
    'Price: High-Low': (a, b) => b.price - a.price,
    'Price: Low-High': (a, b) => a.price - b.price,
    'Selling Count': (a, b) => b.rating.count - a.rating.count,
    'Name: A-Z': (a, b) => a.title.localeCompare(b.title),
    'Name: Z-A': (a, b) => b.title.localeCompare(a.title),
  };

  if (dataProduct !== null) {
    return [...dataProduct].sort(sortFunction[value]);
  }

  return [];
}

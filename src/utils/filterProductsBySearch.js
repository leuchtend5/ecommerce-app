export default function filterProductsBySearch(param, dataProduct) {
  if (dataProduct !== null && param !== null) {
    return dataProduct.filter((item) => item.title.toLowerCase().includes(param.toLowerCase()));
  }
  return [];
}

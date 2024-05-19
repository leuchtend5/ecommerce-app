import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import { CategoryProvider } from './context/CategoryContext';
import ProductsList from './components/ProductsList';
import SingleProduct from './pages/SingleProduct';

export default function App() {
  return (
    <CategoryProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route path="category/:category" element={<ProductsList />} />
        </Route>
        <Route path="product/:productId" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </CategoryProvider>
  );
}

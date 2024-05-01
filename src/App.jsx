import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/Header';
import Footer from './components/Footer';
import { CategoryProvider } from './context/CategoryContext';

export default function App() {
  return (
    <CategoryProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />}>
          <Route path="category/:category" element={<Products />} />
        </Route>
      </Routes>
      <Footer />
    </CategoryProvider>
  );
}

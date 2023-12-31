
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopeCategory from './Pages/ShopeCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Breadcrum from './Components/BreadCrum/Breadcrum';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Shop />} />
      {/* <Route path='/br' element={<Breadcrum />} /> */}
   
      <Route path='/mens' element={<ShopeCategory banner={men_banner} category="men" />}  />
      <Route path='/womens' element={<ShopeCategory banner={women_banner} category="women" />} />
      <Route path='/kids' element={<ShopeCategory banner={kid_banner} category="kid" />} />
      <Route path='/product' element={<Product />} />
      <Route path=':productId' element={<Product />} />

      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<LoginSignup />} />


      </Routes>

      <Footer />


      </BrowserRouter>
  
    </div>
  );
}

export default App;

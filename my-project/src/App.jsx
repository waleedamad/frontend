import { Navbar } from './Components/navbar/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Shop from './Pages/Shop'; 
import Men from './Pages/Men';   
import Women from './Pages/Women'; 
import Kids from './Pages/Kids';
import LoginSignup from './Pages/LoginSignup';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory  category='men'/>} />
          <Route path='/women' element={<ShopCategory category='women'/>} />
          <Route path='/kids' element={<ShopCategory category='kids'/>} />
          <Route path='/loginSignup' element={<LoginSignup />} />
          <Route path='/product' element={<Products/>}>
            <Route path=':productId' element={<Products/>}/>
          </Route>
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

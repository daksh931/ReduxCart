import './App.css'

import Header from './assets/Components/Header'

import { useSelector } from 'react-redux';
import Products from './assets/Components/Products';
import Cart from './assets/Components/Cart';

function App() {
    // automatically getting state from redux
    const showCart =  useSelector(state => state.ui.cartIsVisible)

  return (
    <>
      <Header />
      {showCart && <Cart />}
      <Products />

    </>
  )
}

export default App

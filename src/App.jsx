import './App.css'
import Cart from './assets/Components/Cart'
import Header from './assets/Components/Header'
import Item from './assets/Components/Item'
import { useSelector } from 'react-redux';

function App() {
    // automatically getting state from redux
    const showCart =  useSelector(state => state.ui.cartIsVisible)

  return (
  <>
    <Header />
    {showCart && <Cart />}
        <Item />

  </>
  )
}

export default App

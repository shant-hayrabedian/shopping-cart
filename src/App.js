import './App.css';
import CartHeader from './components/CartHeader/CartHeader';
import CartFooter from './components/CartFooter/CartFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CartItemList from './components/CartItemList/CartItemList';

function App() {
  const [items, setItems] = useState([
    {
      id: Math.random(),
      price: 1399,
      image: '/assets/blender1.jpg',
      quantity: 1,
      name: 'Blender 1',
      color: 'Red'
    },
    {
      id: Math.random(),
      price: 2399,
      image: '/assets/blender2.jpg',
      quantity: 1,
      name: 'Blender 2',
      color: 'Blue'
    }
  ]);

  return (
    <div className="App">
      <CartHeader />
      <CartItemList
        items= {items}
        onDelete = {(item) => {
          setItems(items.filter((i) => i.id !== item.id));
        }}
        />
      <CartFooter items= {items}/>
    </div>
  );
}

export default App;

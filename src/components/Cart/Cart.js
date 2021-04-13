import CartItemList from '../CartItemList/CartItemList';
import CartHeader from '../CartHeader/CartHeader';
import CartFooter from '../CartFooter/CartFooter';
import {useState} from 'react';

function Cart() {
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
        <div>
            <CartHeader/>
            <CartItemList
                items={items}
                onDelete={(item) => {
                    setItems(items.filter((i) => i.id !== item.id));
                }}
            />
            <CartFooter items={items}/>
        </div>
    )
}

export default Cart;

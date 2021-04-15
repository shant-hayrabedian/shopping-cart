import CartItemList from '../CartItemList/CartItemList';
import CartHeader from '../CartHeader/CartHeader';
import CartFooter from '../CartFooter/CartFooter';
import {useState} from 'react';

function Cart() {
    const [items, setItems] = useState(
        {
            items: [
                {
                    id: Math.random(),
                    price: 1399,
                    image: '/assets/blender1.jpg',
                    quantity: 1,
                    name: 'Blender 1',
                    color: 'red'
                },
                {
                    id: Math.random(),
                    price: 2399,
                    image: '/assets/blender2.jpg',
                    quantity: 1,
                    name: 'Blender 2',
                    color: 'Blue'
                }
            ],
            subtotal: 0
        }
    );

    const onDelete = (id) => {
        let delItem = items.items.filter(item => {
            return item.id !== id
        });
        setItems({
            items: delItem
        });
    }

    return (
        <div>
            <CartHeader/>
            <CartItemList
                items={items.items}
                onDelete={onDelete}
            />
            <CartFooter items={items.items}/>
        </div>
    )
}

export default Cart;

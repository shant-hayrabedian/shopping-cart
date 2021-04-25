import CartItemList from '../CartItemList/CartItemList';
import CartHeader from '../CartHeader/CartHeader';
import CartFooter from '../CartFooter/CartFooter';
import {useEffect, useState} from 'react';
import './Cart.css';
import Spinner from 'react-bootstrap/Spinner';

function Cart() {
    const [items, setItems] = useState(null);

    async function fetchData() {
        const res = await fetch('././MOCK_DATA.json');
        res.json()
            .then(res => setTimeout(() => {
                setItems(res);
            }, 100));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onDelete = (id) => {
        let delItem = items.filter(item => {
            return item.id !== id;
        });
        setItems(delItem);
    }

    // const onSelection = (event, name) => {
    //     // let total;
    //     const changedData = items.map((item) => {
    //         if (item.name === name) {
    //             item.quantity = event.target.value
    //         }
    //         const convertedPrice = Number(item.price.split('$').join(''))
    //         let total = 0;
    //         total += item.quantity * convertedPrice;
    //         console.log(total);
    //     });
    //     setItems(changedData)
    // }

    if (items === null) {
        return <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>;
    }


    return (
        <div>
            <div>
                <CartHeader/>
                {items.length === 0 && (
                    <p className="noItems">The cart is empty</p>
                )}
                <CartItemList
                    items={items}
                    onDelete={onDelete}
                   />
                <CartFooter items={items}/>
            </div>
        </div>
    )
}

export default Cart;

import CartItem from "../CartItem/CartItem";
import './CartItemList.css';


function CartItemList({items, onDelete, onSelection}) {
    return (
        <div className="listStyling">
            {items.map((item) => {
                return (
                    <CartItem key={item.id} item={item} onDelete={onDelete} onSelection={onSelection}/>
                )
            })}
        </div>
    )
}

export default CartItemList;

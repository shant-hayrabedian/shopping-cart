import CartItem from "../CartItem/CartItem";
import './CartItemList.css';


const CartItemList = ({items, onDelete}) => {
    return (
        <div className="listStyling">
            {items.map((item) => {
                return (
                    <CartItem key={item.id} item={item} onDelete={onDelete} />
                )
            })}
        </div>
    )
}

export default CartItemList;

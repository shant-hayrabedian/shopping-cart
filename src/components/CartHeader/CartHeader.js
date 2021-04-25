import './CartHeader.css';
import {AiOutlineClose} from 'react-icons/ai';


const CartHeader = () => {
    return (
        <div>
            <span className="CartHeaderText">Your Cart</span><AiOutlineClose className="IconColor"/>
        </div>
    )
}

export default CartHeader

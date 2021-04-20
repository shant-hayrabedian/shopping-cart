import {useState} from "react";
import './CartQuantity.css';

function CartQuantity({item}) {
    const [quantity, setQuantity] = useState({
        count: item.quantity
    });

    const changeButtonsValues = (e) => {
        if (quantity.count <= 1) {
        } else {
            setQuantity({count: quantity.count - 1});
        }
    };
    const handleChange = (e) => {
        setQuantity({count: e.target.value || 1});
    };

    return (
        <div className="dropdownStyling">
            <button className="valueButton" onClick={(e) => changeButtonsValues(e)}>
                -
            </button>
            <input type="number" className="quantityInputValue" name="quantity" value={quantity.count}
                   onChange={handleChange}/>

            <button className="valueButton" onClick={() => setQuantity({count: quantity.count + 1})}>
                +
            </button>
        </div>
    )
}

export default CartQuantity;

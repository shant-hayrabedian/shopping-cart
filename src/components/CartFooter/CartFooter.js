import './CartFooter.css';
import Button from 'react-bootstrap/Button';

function CartFooter({items}) {
    const priceResult = items.reduce((total, currentValue) => total = total + currentValue.price, 0);

    return (
        <div>
            <p className="subTotalStyling">Subtotal:</p>
            <p className="subTotalPriceStyling">
                $ {priceResult}
            </p>
            <Button className="CartFooterButton" variant="info" size="lg">Checkout</Button>
        </div>
    )
}

export default CartFooter;

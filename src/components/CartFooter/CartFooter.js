import './CartFooter.css';
import Button from 'react-bootstrap/Button';

const CartFooter = ({items}) => {
    const priceResult = () =>
        items.reduce((total, currentValue) => {
            let s = Number(currentValue.price.split('$').join(''));
            return total + currentValue.quantity * s
        }, 0)

    return (
        <div>
            <p className="subTotalStyling">Subtotal:</p>
            <p className="subTotalPriceStyling">
                ${priceResult(items).toFixed(2)}

            </p>
            <Button className="CartFooterButton" variant="info" size="lg">Checkout</Button>
        </div>
    )
}

export default CartFooter;

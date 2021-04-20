import './CartItem.css';
import Card from 'react-bootstrap/Card';
import {RiDeleteBin7Fill} from 'react-icons/ri';
import CartQuantity from "../CartQuantity/CartQuantity";

function CartItem({item, onDelete, onSelection}) {
    // const [state, setState] = useState([]);
    // onChange = (index, val) => {
    //     setState({
    //         products: state.products.map((product, i) => (
    //             i === index ? {...product, count: val} : product
    //         ))
    //     })
    // }
    // function converted() {
    //
    // }
    const convertedPrice = Number(item.price.split('$').join(''))
    let total = 0;
    total += item.quantity * convertedPrice
    // return total.toFixed(2);

    return (
        <div>
            <Card style={{width: '30rem', border: '0px', display: 'flex'}}>
                <Card.Img src={item.image} className="itemImages"/>
                <Card.Body>
                    <RiDeleteBin7Fill className="IconColor1" onClick={() => {
                        onDelete(item.id);
                    }}/>
                    <Card.Title className="itemName">{item.name}</Card.Title>

                    <p className="text-muted colorStyling">{item.color}</p>
                    <b className="priceStyling" onSelection={onSelection}>{total.toFixed(2)}</b>
                    <CartQuantity item={item}/>
                </Card.Body>
            </Card>
            <hr/>
        </div>
    )
}

export default CartItem;

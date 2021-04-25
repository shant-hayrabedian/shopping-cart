import './CartItem.css';
import Card from 'react-bootstrap/Card';
import {RiDeleteBin7Fill} from 'react-icons/ri';
import CartQuantity from "../CartQuantity/CartQuantity";

function CartItem({item, onDelete}) {

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
                    <CartQuantity item={item}/>
                </Card.Body>
            </Card>
            <hr/>
        </div>
    )
}

export default CartItem;

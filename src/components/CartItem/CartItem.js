import './CartItem.css';
import Card from 'react-bootstrap/Card';
import {RiDeleteBin7Fill} from 'react-icons/ri';
import Form from 'react-bootstrap/Form';

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
                    <b className="priceStyling">$ {item.price}</b>
                    <Form>
                        <Form.Group className="dropdownStyling" controlId="exampleForm.SelectCustomSizeLg">
                            <Form.Control as="select" size="md">
                                <option>{item.quantity}</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <hr/>
        </div>
    )
}

export default CartItem;

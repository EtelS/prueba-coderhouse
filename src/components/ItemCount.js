import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



function ItemCount({stock, initial, onAdd}) {

    const [cantidad, setCantidad] = useState(parseInt(initial));
    const [cambiarBoton, setCambiarBoton] = useState(true);


    function sumar () {
        if(cantidad<stock){
        setCantidad(cantidad + 1)
        }
    } 

    function restar () {
        if(cantidad>1){
        setCantidad(cantidad - 1)
        }
    }

    const agregarCarrito = () => {
        if(cantidad<=stock){
        onAdd(cantidad)
        setCambiarBoton(false)
        }
    }


    return (
        <div>
            <Button variant="outline-info" size="sm" disabled>{cantidad}</Button> <br/> <br/>
            <Button variant="info" size="sm" onClick= {restar}>-</Button>
            { cambiarBoton ?

            <Button variant="info" size="sm" onClick = {agregarCarrito}>Agregar al carrito</Button>
            :
            <div>
                <Link to= "/cart">
                    <Button variant="info" size="sm">Terminar compra</Button>
                </Link>
                <Link to= "/">
                    <Button variant="info" size="sm" onClick={sumar}>+</Button>
                </Link>
            </div>
            }
        </div>
        
    )
}

export default ItemCount
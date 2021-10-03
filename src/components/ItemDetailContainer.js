import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { fetchProducto } from './Productos';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const {productoId} = useParams();
    const [producto, setProducto] = useState(null)

    let promesaproducto= new Promise ((res )=>{
        setTimeout(()=>{
            res(fetchProducto(parseInt(productoId)))
        });})

    useEffect(() => {
        promesaproducto
        .then((res) => setProducto(res));
        return;
    
    }, [])
    

    return (
        <div>
            <ItemDetail producto= {producto}/>
        </div>
    )
}

export default ItemDetailContainer;

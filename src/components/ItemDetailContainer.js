import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { fetchProducto } from './Productos';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    
    const {productoId} = useParams();
    
    console.log('productoId', productoId);

    const [producto, setProducto] = useState(null)

    const getProductos = () => {
        fetchProducto(productoId);
    }

    useEffect(() => {
        getProductos().then((res)=>setProducto(res))
        return;
    
    }, [])
    
    console.log('producto en itemdetailcontainer', producto)

    return (
        <div>
            <ItemDetail producto= {productoId}/>
        </div>
    )
}

export default ItemDetailContainer

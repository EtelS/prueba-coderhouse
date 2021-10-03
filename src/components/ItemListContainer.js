import React from 'react'
import {useState} from "react"
import {fetchProductos} from "./Productos"
import ItemList from './ItemList'
import { useEffect } from 'react'
import {useParams} from "react-router-dom"

function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams()

    
    useEffect(() => {

        if(idCategoria) {
            fetchProductos
            .then(respuesta => {
                setProductos(respuesta.filter (prod => prod.categoria === idCategoria))
    
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))

        }else{
            fetchProductos
            .then(respuesta => {
                setProductos(respuesta)
    
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))

        }
        
    }, [idCategoria])
        
    console.log(idCategoria)

    
    return (
        <div>
            <h2>{greeting}</h2>
            {loading ? <div>Cargando</div> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer

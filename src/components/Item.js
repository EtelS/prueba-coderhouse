import React from 'react'
import { Link } from 'react-router-dom'


const Item= ({producto}) => {

/*     const fetchDetalle = () => {
        {producto.descrip}
    } */

    return (
        <div>
            <div key= {producto.id} className= "card d-flex w-40 mt-3" >
                <div className= "card-header">{producto.nombre}</div>
                <div className= "card-boady"><img src={producto.foto} style={{ height: 300, weith: 150 }} alt="foto" className= "w-30 h-30"/></div>
                <br />
                <br />
                <div className= "card-footer">
                    <Link to={`/detalle/${producto.id}`}>
                        <button className= "btn/detalle/${} btn btn-warning">Detalles</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Item

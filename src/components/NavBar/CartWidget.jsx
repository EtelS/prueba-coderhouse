import React from 'react'
import {Link} from "react-router-dom"

function CartWidget({cantidad}) {
    return (
        <> <Link to= "/cart">
            {cantidad}
            <img style={{width: "25px"}} src="https://cdn-icons-png.flaticon.com/512/2890/2890766.png" alt="carrito de compras" />
            </Link>
        </>
    )
}

export default CartWidget

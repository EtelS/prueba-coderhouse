import { useState, createContext, useContext } from "react"


const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {

    const [cartList, setCartList] = useState([])

    function addToCart (producto) {
        let verCart = [...cartList]

        if(verCart.some(prod => prod.id === producto.id)) {
            verCart.find(prod => prod.id === producto.id).cantidad += producto.cantidad
            setCartList(verCart)
        }else{
        setCartList([...cartList, producto])
        }
    }
    console.log(cartList)
    return(
        <cartContext.Provider value= {{cartList, addToCart}}>
            {children}
        </cartContext.Provider>
    )
}
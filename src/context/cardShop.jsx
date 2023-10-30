import { createContext, useContext, useEffect, useState } from "react"

const contextCartShop = createContext()

export const useContextCartShop = ()=>{
    return useContext(contextCartShop)
}



export const ProviderContextCartShop = ({children})=>{

    const [productsCart,setProductsCart] = useState({products: [] , cantproduct : 0 , preciofinal : 0})


    const addToCartProduct = (product)=>{

        const existsProduct = productsCart.products.find(products => products.id === product.id)
        if(existsProduct) return

        setProductsCart(e=>{

            return {...e , products : [...e.products, product]  , cantproduct : e.cantproduct + 1 ,preciofinal : e.preciofinal + product.price}
        })
    }

    const deleteProductCart = (idproduct) =>{
        const existsProduct = productsCart.products.find(products => products.id === idproduct)
        if(existsProduct){
            const newProducts = productsCart.products.filter(myproducts => myproducts.id !== idproduct )
            setProductsCart(e=>{

                return {...e , products : newProducts  , cantproduct : e.cantproduct - 1 , preciofinal: e.preciofinal - existsProduct.price}
            })
        }

        return

    }

    useEffect(()=> console.log("mis productos", productsCart), [productsCart])

    return <contextCartShop.Provider value={{productsCart,addToCartProduct,deleteProductCart}}>

        {children}
    </contextCartShop.Provider>
}
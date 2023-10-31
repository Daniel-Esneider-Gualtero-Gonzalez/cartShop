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

            return {...e , products : [...e.products, {...product,cantItems: 0}]  , cantproduct : e.cantproduct + 1 ,preciofinal : e.preciofinal + product.price}
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

    const addCantItemProdu = (productid)=>{
        const newCantproduct =  productsCart.products.map(products => {
            if(products.id === productid){
                products["cantItems"] = products.cantItems ?  products.cantItems + 1 : 1
            }
            
            return products
        })

        return setProductsCart(e=> {
            return {...e,products : newCantproduct}
        })
        


    }


    const delCantItemProduct = (productid)=>{
        const newCantproduct =  productsCart.products.map(products => {
            if(products.id === productid){
               
                products["cantItems"] = products.cantItems && products.cantItems > 0 ?  products.cantItems - 1 : null
            }
            
            return products
        })

        return setProductsCart(e=> {
            return {...e,products : newCantproduct}
        })
    }

    useEffect(()=> console.log("mis productos", productsCart), [productsCart])

    return <contextCartShop.Provider value={{productsCart,addToCartProduct,deleteProductCart,addCantItemProdu,delCantItemProduct}}>

        {children}
    </contextCartShop.Provider>
}
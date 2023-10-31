import { useEffect, useState } from 'react'
import CardProduct from './components/CardProduct'
import { useContextCartShop } from './context/cardShop'

function App() {
  const {productsCart} = useContextCartShop()
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    fetch('https://fakestoreapi.com/products').then(response =>  response.json())
    .then( data => {
       
       setLoading(false)
       setProducts(data)
    })
    .catch((error)=>{
      console.log("error  al obtener los productos", error)
    })
  },[])
  if(loading) return <h1>Cargando productos</h1>

  return (
    <>
     <h1 className='text-2xl mx-auto w-fit mt-10'>Funcionalidad del carrito de compras</h1>
     

     <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
         
        <h2 class="text-2xl mb-3  font-bold  ">Products</h2>
          <div  class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
           
           {products  && products.map(product=>{
            return <CardProduct completeProduct={product}/>
           })}


          </div>
        </div>
      </div>


      <h1>Mis productos</h1>
      <span>Cant products : {productsCart.cantproduct}</span>

      {productsCart.products.length > 0 && productsCart.products.map(myproduct =>{

        return  <li>{myproduct.price}  cantItmes: {myproduct.cantItems}</li>
      })}

     
    </>
  )
}

export default App

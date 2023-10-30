import { useContextCartShop } from "../context/cardShop"


function CardProduct({completeProduct}) {
    const {productsCart,addToCartProduct,deleteProductCart} = useContextCartShop()
    const inCart = productsCart.products.find(myProducts=> myProducts.id === completeProduct.id)
  return (
    <>

      
      <a  key={completeProduct.id} href="#" className="group border rounded  p-2 ">
      <div style={{'width' : '200px'}} className="w-fit mx-auto">
        <div style={{'width' : '200px'}} className="mx-auto w-[100px] h-[100px]">
          <img style={{'width' : '200px'}} src={completeProduct.image} alt={completeProduct.description} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
        <span className='font-semibold'>Category</span> {completeProduct.category}
        <p className="mt-1 text-lg font-medium text-gray-900">${completeProduct.price}</p>

        {inCart && <span>Esta en el carro</span>}

        <div>
         {!inCart && <button onClick={()=> addToCartProduct(completeProduct)}>Add To Card</button>}
          {inCart && <button onClick={()=> deleteProductCart(completeProduct.id)}>Delete To Card</button>} 
        </div>
      </div>
      </a>
    </>
  )
}

export default CardProduct
import { useContextCartShop } from "../context/cardShop"


function CardProduct({completeProduct}) {
    const {productsCart,addToCartProduct,deleteProductCart,addCantItemProdu,delCantItemProduct} = useContextCartShop()
    const inCart = productsCart.products.find(myProducts=> myProducts.id === completeProduct.id)
  return (
    <>

      
      <a  key={completeProduct.id} href="#" className="border-black  group border rounded  p-2 ">
      <div style={{'width' : '200px'}} className="w-fit mx-auto">
        <div style={{'width' : '200px'}} className="mx-auto w-[100px] h-[100px]">
          <img style={{'width' : '200px'}} src={completeProduct.image} alt={completeProduct.description} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
        <span className='font-semibold'>Category</span> {completeProduct.category}
        <p className="mt-1 text-lg font-medium text-gray-900">${completeProduct.price}</p>

        <div>
        <button onClick={()=> addCantItemProdu(completeProduct.id)} className="text-2xl border flex mb-1 justify-center items-center rounded w-[40px]">+</button>
        <button onClick={()=> delCantItemProduct(completeProduct.id)} className="text-2xl border flex justify-center items-center rounded w-[40px]">-</button>
        </div>
        {inCart && <span className="bg-green-400">Esta en el carro</span>}

        <div>
         {!inCart && <button className="mx-auto border py-2 px-2 flex justify-center my-2 rounded border-black hover:bg-green-500" onClick={()=> addToCartProduct(completeProduct)}>Add To Card</button>}
          {inCart && <button className="mx-auto border py-2 px-2 flex justify-center my-2 rounded border-black hover:text-white hover:bg-red-500" onClick={()=> deleteProductCart(completeProduct.id)}>Delete To Card</button>} 
        </div>
      </div>
      </a>
    </>
  )
}

export default CardProduct
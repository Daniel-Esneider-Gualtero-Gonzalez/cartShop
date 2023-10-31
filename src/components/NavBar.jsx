import { useContextCartShop } from "../context/cardShop"

function NavBar() {
  const {productsCart} =  useContextCartShop()
  return (
    <nav className="flex justify-center  py-2 bg-blue-300">
       <div className='text-2xl relative '>
       <span className="absolute right-1">{productsCart.cantproduct}</span>
       <button  className="flex justify-center items-center border text-2xl w-[100px] py-2 px-2 rounded">🛒</button>
       </div>
    </nav>
  )
}

export default NavBar
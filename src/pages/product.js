import productLish from "../components/productLish"
import { products } from "../data"
const product = () => {
  return (
    `<div class="container"><div class="row"> 
      ${productLish({products: products})}
    </div></div>`
  )
}

export default product
import { products } from "../data"
const productDetail = ({id}) => {
    const product = products.find((product) => product.id === +id);
    if(!product) return null;
  return (
    
    `<div>${product.name}</div>`
  )
}

export default productDetail
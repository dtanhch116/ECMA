import { useEffect, router, useState } from "../../lib"
import { products } from "../../data";
import { v4 as uuidv4 } from 'uuid';

const adminProductEditPage = ({id}) => {
  // const products = JSON.parse(localStorage.getItem('products')) || [];
  //   const currenProduct = products.find(product => product.id === id);
  const [Product, setProduct] = useState({});

useEffect(() => {
  fetch(`http://localhost:3000/products/${id}`)
  .then(response => response.json())
  .then((data) => {
    setProduct(data);
  })
}, []);

  useEffect(() => {
    const form = document.getElementById('form-add');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    form.addEventListener('submit', function(e){
      e.preventDefault(); // dừng sự kiện reload lại page
      const formData = {
        name: productName.value,
        price: productPrice.value,
      }
      
      fetch(`http://localhost:3000/products/${id}`,{
        method: "PUT",
        headers: {
          "content-Type": "appLication/json",
        },
        body:JSON.stringify(formData)
      }).then(() => {

        // redirect sang adminProduct
        router.navigate('admin/products');
      })
      
    })
  })
  return`
    <div class="container">
    <h1>Cập Nhật sản phẩm</h1>
    <form action="" id="form-add">
      <div class="form-group mb-3">
        <label for="">Tên sản phẩm</label>
        <input type="texxt" id="product-name" class="form-control" value="${Product.name}">
      </div>
      <div class="form-group mb-3">
        <label for="">Giá sản phẩm</label>
        <input type="texxt" id="product-price" class="form-control" value="${Product.price}">
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Cập Nhật Sản phẩm</button>
      </div>
    </form>
    </div>
    `
//   return `hahaha`
}

export default adminProductEditPage
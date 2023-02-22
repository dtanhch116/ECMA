import { useEffect, router, useState } from "../../lib"
// import { products } from "../../data";
import { v4 as uuidv4 } from 'uuid';

const adminProductAddPage = () => {
  const [data, setdata] = useState([]);
  // const products = JSON.parse(localStorage.getItem('products')) || [];

  useEffect(() => {
    const form = document.getElementById('form-add');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    form.addEventListener('submit', function(e){
      e.preventDefault(); // dừng sự kiện reload lại page
      const newProduct = {
        name: productName.value,
        price: productPrice.value,
      }

      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "content-Type": "appLication/json",
        },
        body: JSON.stringify(newProduct),
      }).then(() => {router.navigate('admin/products');});
      
      // // thêm mảng vào product
      // products.push(newProduct);
      // // lưu lại storage
      // localStorage.setItem('products',JSON.stringify(products));
      // redirect sang adminProduct
    })
  })
  return`
    <div class="container">
    <h1>Thêm sản phẩm</h1>
    <form action="" id="form-add">
      <div class="form-group mb-3">
        <label for="">Tên sản phẩm</label>
        <input type="texxt" id="product-name" class="form-control">
      </div>
      <div class="form-group mb-3">
        <label for="">Giá sản phẩm</label>
        <input type="texxt" id="product-price" class="form-control">
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Thêm Sản phẩm</button>
      </div>
    </form>
    </div>
    `
  
}

export default adminProductAddPage
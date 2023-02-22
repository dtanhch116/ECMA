import { products } from "../../data"
import { useEffect, useState } from "../../lib"
const AdminProductPage = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((Response) => Response.json())
    .then((data) => setProduct(data));
    // const products = JSON.parse(localStorage.getItem("products")) || [];
    // setdata(products);
  },[]) // 

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for(let btn of btns){
      btn.addEventListener("click", function() {
        const id = this.dataset.id;
        fetch(`http://localhost:3000/products/${id}`,{
          method: "DELETE",
        }).then(() => {
           const newProduct = products.filter(product => product.id !== +id);
           setProduct(newProduct);
         });
      })
    }
  });
  return `
    <div class="container">
    <a href="/admin/add_product"><button class="btn btn-danger btn-remove">Thêm</button></a>
    <table class="table table-bordered">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    ${products.map((product, index) => `
    <tr>
    <td>${index + 1}</td>
    <td>${product.name}</td>
    <td>
      <button data-id=${product.id} class="btn btn-danger btn-remove">Xóa</button>
      <a href="/admin/edit_product/${product.id}">Sửa</a>
    </td>
  </tr>
    `).join('')}
      
    </tbody>
  </table>
    </div>
    `
}

export default AdminProductPage
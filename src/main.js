import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { render, router } from "./lib";
import homePage from "./pages/home";
import aboutpage from "./pages/About";
import product from "./pages/product";
import notFound from "./pages/notFound";
import productDetail from "./pages/productDetail";
import AdminProductPage from "./pages/admin/product";
import adminProductAddPage from "./pages/admin/product_add";
import adminProductEditPage from "./pages/admin/product_edit";


const app = document.getElementById('app');

router.on("/", function(){
    render(homePage, app);
});
router.on("/about", function(){
    render(aboutpage, app);
});
router.on("/product", function(){
    render(product, app);
});

router.on("/product/:id",({data}) => {
    render(() => {return productDetail(data)}, app);
})

router.on("/admin/products", () => render(AdminProductPage, app));
router.on("/admin/add_product", () => render(adminProductAddPage, app));
router.on("/admin/edit_product/:id", ({data}) => render(() => adminProductEditPage(data), app));



router.notFound(() => {
    render(notFound, app)
})
router.resolve();

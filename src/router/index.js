import {createBrowserRouter} from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import App from "../App";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Blog from "../pages/Blog/Blog";
import Sale from "../pages/Sale/Sale";
import ContactUs from "../pages/ContactUs/ContactUs";
import Admin from "../pages/Admin/Admin";
import AllProducts from "../pages/AllProducts/AllProducts";
import AddProduct from "../pages/AddProduct/AddProduct";
import EditProduct from "../pages/EditProduct/EditProduct";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductPage from "../pages/ProductPage/ProductPage";


const test = {
    HOME: "/home",
    SHOPPING_CART: '/shoppingCart',
    ProductCard: '/shop/:productId'
}


const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: test.HOME,
                element: <Home/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/sale',
                element: <Sale/>
            },
            {
                path: '/contact_us',
                element: <ContactUs/>
            },
            {
                path: test.SHOPPING_CART,
                element: <ShoppingCart/>
            },
            {
                path: test.ProductCard,
                element: <ProductPage/>
            }
        ]
    },
    {
        path: '/admin',
        element: <Admin/>,
        children: [
            {
                path: "all_products",
                element: <AllProducts/>
            },
            {
                path: "add_product",
                element: <AddProduct/>
            },
            {
                path: "all_products/:productId",
                element: <EditProduct/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export {publicRoutes}
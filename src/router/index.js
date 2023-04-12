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


const test = {
    HOME: "/home"
}


const publicRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/home',
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
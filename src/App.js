import React, {useEffect, useState} from 'react';
import {Layout, Image, ConfigProvider, Button, Space, Typography, Carousel} from "antd";
import CustomButton from './components/Button/Button'
import {Content, Footer} from "antd/es/layout/layout";
import scss from './App.module.scss'
import Header from "./components/Header";
import logo from './assets/logo.png'
import Menu from "./components/Menu";
import theme from "./theme";
import {HeartOutlined, SearchOutlined} from "@ant-design/icons";
import ShoppingCartIcon from "./components/ShoppingCartIcon/ShoppingCartIcon";
import Banner from "./components/Banner/Banner";
import fonts from './style/fonts.module.scss'
import Admin from "./pages/Admin/Admin";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "./redux/actions";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductPage from "./pages/ProductPage/ProductPage";
import {Link, Outlet} from "react-router-dom";
import {getFirebase, useFirestoreConnect} from "react-redux-firebase";

const items = [
    {
        label: <Link to={'/home'}>Home</Link>,
        key: 'home',
    },
    {
        label: <Link to={'/shop'}>Shop</Link>,
        key: 'shop',
    },
    {
        label: <Link to={'/blog'}>Blog</Link>,
        key: 'blog',
    },
    {
        label: <Link to={'/sale'}>Sale</Link>,
        key: 'sale',
    },
    {
        label: <Link to={'/contact_us'}>Contact us</Link>,
        key: 'contact_us',
    },
]
const App = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.firestore.ordered.products)
    const auth = useSelector(state => state.firebase.auth)
    useFirestoreConnect(() => [
        {collection: 'products'},
        {collection: 'banners'}
    ])
    return (
        <ConfigProvider theme={theme}>
            <Layout className={scss.layout}>
                <Header>
                    <Link to={'/home'}>
                        <Image src={logo} preview={false}/>
                    </Link>
                    <Space>
                        <Menu mode="horizontal" items={items} className={fonts.Oswald_Regular_14_AA}/>
                        <Button className={scss.app_button_link} type={"link"}
                                icon={<SearchOutlined/>}>{'search'.toUpperCase()}</Button>
                    </Space>
                    <Space>
                        {
                            auth.uid ?
                                <span style={{cursor: "pointer"}} onClick={() => {
                                    getFirebase().auth().signOut()
                                }}>
                                    Logout
                                </span> :
                                <>
                                    <Link to={'login'}>
                                        <span>SIGN IN</span>

                                    </Link>
                                    <Link to={'register'}>
                                        <span>CREATE AN ACCOUNT</span>
                                    </Link>
                                </>
                        }

                        <HeartOutlined/>
                        <Link to={'shoppingCart'}>
                            <ShoppingCartIcon/>
                        </Link>
                    </Space>
                </Header>
                <Content className={scss.content}>
                    {/*<Link to={'admin'}>*/}
                    {/*    <Button>*/}
                    {/*        Admin*/}
                    {/*    </Button>*/}
                    {/*</Link>*/}
                    <Outlet/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </ConfigProvider>
    );
};

export default App;
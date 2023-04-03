import React, {useEffect} from 'react';
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
import {useDispatch} from "react-redux";
import {getProducts} from "./redux/actions";

const items = [
    {
        label: 'home',
        key: 'home',
    },
    {
        label: 'Shop',
        key: 'Shop',
    },
    {
        label: 'blog',
        key: 'blog',
    },
    {
        label: 'Sale',
        key: 'Sale',
    },
    {
        label: 'contact us',
        key: 'contact us',
    },
]
const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, []);
    return (
        <ConfigProvider theme={theme}>
            <Layout className={scss.layout}>
                <Header>
                    <Image src={logo} preview={false}/>
                    <Space>
                        <Menu mode="horizontal" items={items} className={fonts.Oswald_Regular_14_AA}/>
                        <Button type={"link"} icon={<SearchOutlined/>}>{'search'.toUpperCase()}</Button>
                    </Space>
                    <Space>
                        <span>SIGN IN</span>
                        <span>CREATE AN ACCOUNT</span>
                        <HeartOutlined/>
                        <ShoppingCartIcon/>
                    </Space>
                </Header>
                <Content className={scss.content}>
                    {/*<Carousel autoplay>*/}
                    {/*    <Banner/>*/}
                    {/*</Carousel>*/}
                    <Admin/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </ConfigProvider>
    );
};

export default App;
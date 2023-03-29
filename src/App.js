import React from 'react';
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
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
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
    return (
        <ConfigProvider theme={theme}>
            <Layout className={scss.layout}>
                <Header>
                    <Image src={logo} preview={false}/>
                    <Space>
                        <Menu mode="horizontal" items={items}/>
                        <Button type={"link"} icon={<SearchOutlined/>}>{'search'.toUpperCase()}</Button>
                    </Space>
                    <Space>
                        <Typography.Link>SIGN IN</Typography.Link>
                        <Typography.Link>CREATE AN ACCOUNT</Typography.Link>
                        <HeartOutlined />
                        <ShoppingCartIcon/>
                    </Space>
                </Header>
                <Content>
                    <Carousel autoplay>
                        <Banner/>
                    </Carousel>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </ConfigProvider>
    );
};

export default App;
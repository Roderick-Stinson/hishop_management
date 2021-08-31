import {Layout, Menu, Breadcrumb, Image} from 'antd';
import {HomeFilled, ShoppingFilled, AccountBookFilled, UnorderedListOutlined, AppstoreAddOutlined, SortAscendingOutlined, TagsOutlined, DeliveredProcedureOutlined, SettingOutlined, FunnelPlotOutlined, FieldTimeOutlined, GiftOutlined, FireOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import React, {useState} from "react";

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

const MainPage = () => {
    const [collapsed, ToggleCollapsed] = new useState(false);


    return (
        <Layout style={{minHeight: window.screen.height, minWidth: window.screen.width}}>
            <Header className="header" style={{paddingLeft: 24}}>
                <div className={'logo'} style={{float: 'left', width: '12%'}}>
                    <Image
                        alt="logo"
                        width={30}
                        height={30}
                        style={{display: 'inline'}}
                        preview={false}
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    />
                    <p style={{display: 'inline', fontSize: 20, color: 'white', marginLeft: 10, verticalAlign: 'middle'}}>Ant Design</p>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider
                    className="site-layout-background"
                    trigger={null}
                    collapsible={true}
                    collapsed={collapsed}
                    onCollapse={() => ToggleCollapsed(!collapsed)}
                    width={'12%'}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                    >
                        <Menu.Item key="MainPage" icon={<HomeFilled/>} title={"首页"} style={{paddingLeft: 50}}>首页</Menu.Item>
                        <SubMenu key="goods" icon={<ShoppingFilled/>} title={"商品"} style={{paddingLeft: 25}}>
                            <Menu.Item key="goods_list" icon={<UnorderedListOutlined/>}>商品列表</Menu.Item>
                            <Menu.Item key="goods_add" icon={<AppstoreAddOutlined/>}>添加商品</Menu.Item>
                            <Menu.Item key="goods_classification" icon={<SortAscendingOutlined/>}>商品分类</Menu.Item>
                            <Menu.Item key="goods_tags" icon={<TagsOutlined />}>品牌管理</Menu.Item>
                        </SubMenu>
                        <SubMenu key="orders" icon={<AccountBookFilled/>} title={"订单"} style={{paddingLeft: 25}}>
                            <Menu.Item key="orders_list" icon={<UnorderedListOutlined/>}>订单列表</Menu.Item>
                            <Menu.Item key="orders_settings" icon={<SettingOutlined/>}>订单设置</Menu.Item>
                            <Menu.Item key="orders_return" icon={<DeliveredProcedureOutlined/>}>退货情况</Menu.Item>
                        </SubMenu>
                        <SubMenu key="selling" icon={<FunnelPlotOutlined/>} title={"营销"} style={{paddingLeft: 25}}>
                            <Menu.Item key="selling_promotion" icon={<FieldTimeOutlined/>}>限时活动</Menu.Item>
                            <Menu.Item key="selling_coupons" icon={<GiftOutlined/>}>优惠券</Menu.Item>
                            <Menu.Item key="selling_recommendation" icon={<FireOutlined/>}>人气推荐</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
};


export default MainPage
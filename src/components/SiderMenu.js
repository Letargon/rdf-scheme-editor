/*
    Боковое меню
*/
import React, { Component } from "react";
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router } from "react-router-dom";

const Sider = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class SiderMenu extends Component {
    render() {
        return (
            <Router>
                <Sider style={SiderStyle}>
                    <Menu style={MenuStyle}
                        theme="dark"
                        mode="inline"
                        defaultOpenKeys={['sub1']}
                    >
                        <MenuItemGroup key="g1" title={<span><b>RDF4J Server</b></span>}
                            style={TitleMenuStyle} >
                        </MenuItemGroup>

                        <SubMenu key="sub1" title={<span><b>Repositories</b></span>}>
                            <Menu.Item key="0">
                                <a href="/NewRep">New repository</a>
                            </Menu.Item>
                            <Menu.Item key="1">
                                <a href="/">Delete repository</a>
                            </Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub2" title={<span><b>Explore</b></span>}>
                            <Menu.Item key="2"><a href="/">Summary</a></Menu.Item>
                            <Menu.Item key="3"><a href="/">Namespaces</a></Menu.Item>
                            <Menu.Item key="4"><a href="/">Contexts</a></Menu.Item>
                            <Menu.Item key="5"><a href="/">Types</a></Menu.Item>
                            <Menu.Item key="6"><a href="/">Explore</a></Menu.Item>
                            <Menu.Item key="7"><a href="/">Query</a></Menu.Item>
                            <Menu.Item key="8"><a href="/">Saved Queries</a></Menu.Item>
                            <Menu.Item key="9"><a href="/">Export</a></Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub3" title={<span><b>Modify</b></span>}>
                            <Menu.Item key="10"><a href="/">SPARQL Update</a></Menu.Item>
                            <Menu.Item key="11"><a href="/">Add</a></Menu.Item>
                            <Menu.Item key="12"><a href="/">Remove</a></Menu.Item>
                            <Menu.Item key="13"><a href="/">Clear</a></Menu.Item>
                        </SubMenu>

                        <MenuItemGroup key="sub4" title={<span><b>System</b></span>}>
                            <Menu.Item key="14"><a href="/">Information</a></Menu.Item>
                        </MenuItemGroup>
                    </Menu>
                </Sider>
            </Router>
        );
    }
}

const SiderStyle = {
    overflow: 'auto',
    height: '100%',
    position: 'fixed'
}

const MenuStyle = {
    height: '100%',
    width: 200
}

//RDF4J Server
const TitleMenuStyle = {
    background: "#C89D4F",
}
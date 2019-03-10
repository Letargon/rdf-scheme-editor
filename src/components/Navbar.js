import React, { Component } from "react";
import logo from "../logo.png";
import { Layout, Menu } from 'antd';
import { Link, Router } from "react-router-dom";

const { Header } = Layout;

export default class Navbar extends Component {
    render() {
        return (
            <Header className="header">

                <Menu
                    theme="dark"
                    mode="horizontal"
                    //defaultSelectedKeys={['1']}
                    style={NavMenuStyle}
                >
                    <img src={logo} alt="rdf4j" style={LogoStyle} />
                    <Menu.Item key="1">Welcome</Menu.Item>

                    {/*
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                    */}

                </Menu>

            </Header>
        );
    }
}

//Menu
const NavMenuStyle = {
    lineHeight: '64px', 
    margin: 0,
}

//img
const LogoStyle = {
    height: '58px',
}
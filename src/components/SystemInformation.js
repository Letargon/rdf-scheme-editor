/*
    Страница System/Information
*/
import React, { Component } from "react";
import { Layout } from 'antd';

import Pathinfo from "./PathInfo"; //home-list-app

const { Content } = Layout;

export default class SystemInformation extends Component {
    render() {
        return (
            <Layout style={MainLayoutStyle}>
                <Pathinfo />
                <Content style={ContentStyle}>
                    <h1 style={H1TitleStyle}>System Information</h1>
                    <hr />
                </Content>
            </Layout>
        );
    }
}

const MainLayoutStyle = {
    marginLeft: 200,
    padding: '0',
}

const ContentStyle = {
    margin: '0 20px 0',
    overflow: 'initial',
}

//System Information
const H1TitleStyle = {
    margin: 0,
}
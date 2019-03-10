/*
    Указание пути над содержимым страницы
*/
import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';

const UserBreadcrumb = ({ match }) =>
  <span>{match.params.PATH}</span>;

const routes = [
  { path: '/', breadcrumb: 'Home' },
  { path: '/:PATH', breadcrumb: UserBreadcrumb },  
];

export default class PathInfo extends Component {
  render() {
    return (
      <Breadcrumb 
      style={BreadcrumbStyle}
      routes={routes}></Breadcrumb>   
    );
  }
}

const BreadcrumbStyle = {
  margin: '20px',
}
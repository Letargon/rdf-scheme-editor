import React from 'react'
//import {Col, Row} from "antd";
import {
	Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import 'antd/dist/antd.css';



const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
	return (
		<Layout>
			<Header className="header">
				{/* 
	      //  TODO : left side navigation menu 
	      */}
				<div className="logo" />

				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['1']}
					style={{ lineHeight: '64px' , margin:'0'}}
				>
					<Menu.Item key="1">nav 1</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
				</Menu>

			</Header>
			<Layout>
				<Sider width={200}
					style={{
						background: '#fff',
						overflow: 'auto',
						height: '40vh',
						position: 'fixed'
					}}>

					<Menu
						mode="inline"
						defaultSelectedKeys={['1']}
						style={{ height: '100%', borderRight: 0, width: 199 }}
					>
						<Menu.Item key="1">option1</Menu.Item>
						<Menu.Item key="2">option2</Menu.Item>
						<Menu.Item key="3">option3</Menu.Item>
						<Menu.Item key="4">option4</Menu.Item>
					</Menu>

				</Sider>
				<Layout style={{ marginLeft: 200, padding: '0 24px 24px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content style={{
						margin: '24px 16px 0',
						overflow: 'initial'
					}}
					>

					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default App

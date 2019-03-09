import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css';

import Navbar from "../components/Navbar";
import SiderMenu from "../components/SiderMenu";
import MainForm from "../components/MainForm";

class App extends Component {
	render() {
		return (
			<React.Fragment>

				<Navbar />
				<SiderMenu />
				{/*
					<MainForm />
				*/}

				<MainForm />
					

				

			</React.Fragment>
		);
	}
}

export default App

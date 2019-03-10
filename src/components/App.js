import React, { Component } from "react";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";	//Шапка
import SiderMenu from "./SiderMenu"; //Боковое меню
import NewRepository from "./NewRepository";
import SystemInformation from "./SystemInformation";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<SiderMenu />
				<Router>
					<Switch>
						<Route exact path="/" component={SystemInformation} />
						<Route path="/NewRep" component={NewRepository} />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;

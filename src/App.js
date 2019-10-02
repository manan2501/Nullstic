import React from 'react';
import Navigation from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Campaigns from "./Component/Campaigns/Campaigns";
import Report from "./Component//Report/Report";
import Awareness from "./Component/Awareness/Awareness";
import CampaignsDetails from "./Component/Campaigns/CampaignsDetails"
import './App.css';
import "tachyons";

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			routes: "home"
		}
	}

	onRouteChange = (route)=>{
		this.setState({routes: route})
	};

	render(){
		if(this.state.routes === "home"){
			return (
		    <div>
		    	<Navigation onRouteChange={this.onRouteChange}/>
		      	<Home/>
		    </div>
		    	);
			}    
		else if(this.state.routes === "campaigns"){
	    	return (
			    <div>
			    	<Navigation onRouteChange={this.onRouteChange}/>
			      	<Campaigns onRouteChange={this.onRouteChange}/>
			    </div>
				);	    
	    	}
	    else if (this.state.routes === "report"){
	    	return (
			    <div>
			    	<Navigation onRouteChange={this.onRouteChange}/>
			      	<Report/>
			    </div>
				);	
	    	}
	    else if (this.state.routes === "awareness"){
	    	return (
			    <div>
			    	<Navigation onRouteChange={this.onRouteChange}/>
			       	<Awareness/>
			    </div>
				);	
		    }         
		}
	}

export default App;

import React from "react";
import {Jumbotron, Container, Button, Form, Col, Row} from "react-bootstrap";
class Report extends React.Component{
	/*constructor(props){
		super(props)
		this.state = {
			location: "",
			hint: "",
			image: ""
		}
	}

	onLocationChange = (event)=>{
		this.setState({location: event.target.value})
	}

	onHintChange = (event)=>{
		this.setState({hint: event.target.value})
	}

	onImgChange = (event) => {
		this.setState({image: event.target.value})
	}

	onSubmit = ()=>{
		fetch("http://localhost:3000/report", {
			method: "post",
        	headers: {"Content-Type": "application/json"},
      		body: JSON.stringify({
        		location: this.state.location,
       			hint: this.state.hint,
       			image: this.state.image
      		})
		})
		.then(response => {console.log(response.json())})
		.then(console.log)
	}
*/
	render(){
		return(
    	<div className="tc pt3">
    		<Jumbotron fluid>
    			<Container>
					<div>
						<h1 className="f3 f2-m f1-l fw2 black-90 mv3">Be part of the solution, not the pollution</h1>
						<h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">Help us to make surat plastic free!</h2>
					</div>
					<div className="Instructions">
				    	<h6>NOTE: Report only if polythene is of more then 50 micrones</h6>
					</div>
					<div className="ph3">
						<div>Don't let the suspect go away... Time to punish them.</div>
					</div>
				</Container>
			</Jumbotron>
			<div className="tc">
				<Form>
					<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeOLY_uoJQB2Dvp45XoWu5iscd3ZFN5kPT3iHidG78uF1MYmg/viewform?embedded=true" width="100%" height="774" frameborder="0" marginheight="0" marginwidth="0"></iframe>
				</Form>
			</div>
		</div>
    	);
	}
}

export default Report;

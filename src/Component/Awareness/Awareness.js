import React from "react";
import {Jumbotron, Container, Row, Col, Accordion, Card} from "react-bootstrap";

const Awareness = ()=>{
    return(
    		<div className="pt5 tc">
			        <header className="tc ph4">
			             <h1 className="f3 f2-m f1-l fw2 -90 mv3">
			               ALTERNATIVE OF PLASTIC
			             </h1>
			            <h1 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
			                Our best friend is in danger!!!
			            </h1>
			            <h2 className="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
			                Save earth from plastic
			            </h2>
			            <p>Click on below images to see their alternative</p>
			            <Accordion>						  
						    <Accordion.Toggle as={Card.Header} eventKey="0">
						      	<Col xs={12}>
				            		<img src="https://3.imimg.com/data3/YX/CA/MY-13761993/polythene-bags-500x500.jpg" className="db br2 br--top" alt="Photo of a kitten looking menacing."/>
				            		<div className="pa1 ph1-ns pb3-ns">
				              			<div className="dt w-100 mt1">
				                			<div className="dtc">
				                  				<h1 className="f5 f4-ns mv0">Polythene Bag</h1>
				                			</div>
				              			</div>
				            		</div>
			          			</Col>
						    </Accordion.Toggle>
						    <Accordion.Collapse eventKey="0">
						      	<Col xs={12}>
				            		<img src="https://www.raghukularyawart.org/wp-content/uploads/2018/06/Vegan-Compartment-Bag.jpg" className="db br2 br--top" alt="Photo of a kitten looking menacing."/>
				            		<div className="pa1 ph1-ns pb3-ns">
				              			<div className="dt w-100 mt1">
				                			<div className="dtc">
				                  				<h1 className="f5 f4-ns mv0">Cotton Bag</h1>
				                			</div>
				              			</div>
				            		</div>
			          			</Col>
						    </Accordion.Collapse>
						</Accordion>
						<Accordion >						  
						    <Accordion.Toggle as={Card.Header} eventKey="0">
						      	<Col xs={12}>
				            		<img src="https://5.imimg.com/data5/QA/PE/MY-36948695/transparent-plastic-bottle-500x500.jpg" className="db br2 br--top" alt="Photo of a kitten looking menacing."/>
				            		<div className="pa1 ph1-ns pb3-ns">
				              			<div className="dt w-100 mt1">
				                			<div className="dtc">
				                  				<h1 className="f5 f4-ns mv0">Plastic Bottle</h1>
				                			</div>
				              			</div>
				            		</div>
			          			</Col>
						    </Accordion.Toggle>
						    <Accordion.Collapse eventKey="0">
						      	<Col xs={12}>
				            		<img src="https://5.imimg.com/data5/ES/BO/MY-56291496/stainless-steel-water-bottle-500x500.jpg" className="db br2 br--top" alt="Photo of a kitten looking menacing."/>
				            		<div className="pa1 ph1-ns pb3-ns">
				              			<div className="dt w-100 mt1">
				                			<div className="dtc">
				                  				<h1 className="f5 f4-ns mv0">Steele Bottle</h1>
				                			</div>
				              			</div>
				            		</div>
			          			</Col>
						    </Accordion.Collapse>
						</Accordion>
						<Accordion >						  
						    <Accordion.Toggle as={Card.Header} eventKey="0">
						      	<Col xs={12}>
				            		<img src="https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/179943" className="db br2 br--top" alt="Photo of a kitten looking menacing."/>
				            		<div className="pa1 ph1-ns pb3-ns">
				              			<div className="dt w-100 mt1">
				                			<div className="dtc">
				                  				<h1 className="f5 f4-ns mv0">Plastic Cup</h1>
				                			</div>
				              			</div>
				            		</div>
			          			</Col>
						    </Accordion.Toggle>
						    <Accordion.Collapse eventKey="0">
						      	<Col xs={12}>
				            		<img src="https://greenpaperproducts.com/images/biodegradable/cups/compostable-hot-cups-lg-SMRE8.jpg" className="db br2 br--top" alt="Photo of a kitten looking menacing."/>
				            		<div className="pa1 ph1-ns pb3-ns">
				              			<div className="dt w-100 mt1">
				                			<div className="dtc">
				                  				<h1 className="f5 f4-ns mv0">Paper Cup</h1>
				                			</div>
				              			</div>
				            		</div>
			          			</Col>
						    </Accordion.Collapse>
						</Accordion>						                 
			        </header>   
  			</div>
    );
}

export default Awareness;

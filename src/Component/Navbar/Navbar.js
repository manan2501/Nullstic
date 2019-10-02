import React from "react";
import {Navbar, Nav} from "react-bootstrap";


class Navigation extends React.Component{
    render(){
       return(
            <div>
                <Navbar collapseOnSelect bg="dark" expand="lg" fixed="top" variant="dark">
                  <Navbar.Brand href="#home">NULLSTICK</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#home" onClick={() => this.props.onRouteChange("home")}>Home</Nav.Link>
                      <Nav.Link href="#link" onClick={() => this.props.onRouteChange("report")}>Report</Nav.Link>
                      <Nav.Link href="#link" onClick={() => this.props.onRouteChange("campaigns")}>Campaigns</Nav.Link>
                      <Nav.Link href="#link" onClick={() => this.props.onRouteChange("awareness")}>Alternatives</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        ); 
    }
}

export default Navigation;

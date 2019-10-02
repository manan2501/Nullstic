import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container, Col, Button, Jumbotron} from "react-bootstrap"


class Campaigns extends React.Component{
    render(){
      return(
      <div>
       <Jumbotron fluid>
          <div>
              <div className="pt4 tc">
                  <h2>CAMPAIGNS NEAR YOU</h2>
                  <p>The Earth is what we all have in common</p>
              </div>
          </div>
          <div> 
              <Container>
                <Row>
                  <Col sm>
                    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                      <img alt="Campaigns near you" src="https://www.helensburghadvertiser.co.uk/resources/images/9923749.jpg?display=1&htype=0&type=responsive-gallery"/>
                      <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                          <div className="dtc">
                             <Button variant="primary">Details</Button>
                          </div>
                          <div className="dtc tr">
                            <h2 className="f5 mv0">Date: 09/10/2019</h2>
                          </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                          People dump plastic and other waste in the river, which ultimately ends up on the beach, 
                          sea-bed or inside sea animals.We need to stop doing this.
                        </p>
                      </div>
                    </article>
                  </Col>
                  <Col sm>
                    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                      <img alt="Campaigns near you" src="https://www.helensburghadvertiser.co.uk/resources/images/9923749.jpg?display=1&htype=0&type=responsive-gallery"/>
                      <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                          <div className="dtc">
                             <Button variant="primary" >Details</Button>
                          </div>
                          <div className="dtc tr">
                            <h2 className="f5 mv0">Date: 09/10/2019</h2>
                          </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                          People dump plastic and other waste in the river, which ultimately ends up on the beach, 
                          sea-bed or inside sea animals.We need to stop doing this.
                        </p>
                      </div>
                    </article>
                  </Col>
                  <Col sm>
                    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                      <img alt="Campaigns near you" src="https://www.helensburghadvertiser.co.uk/resources/images/9923749.jpg?display=1&htype=0&type=responsive-gallery"/>
                      <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                          <div className="dtc">
                             <Button variant="primary">Details</Button>
                          </div>
                          <div className="dtc tr">
                            <h2 className="f5 mv0">Date: 09/10/2019</h2>
                          </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                          People dump plastic and other waste in the river, which ultimately ends up on the beach, 
                          sea-bed or inside sea animals.We need to stop doing this.
                        </p>
                      </div>
                    </article>
                  </Col>
                </Row>
                <Row>
                  <Col sm>
                    <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
                        <Button variant="outline-dark" href="https://forms.gle/8DfjYUPV112rgvf57">
                          <img alt="Campaigns near you" src="https://www.ktfg.co/wp-content/uploads/sites/3017/2019/04/plus.png"/>
                          <div className="pa1 ph1-ns pb1-ns">
                            <p className="f3">Click to start your Campaign</p>
                          </div>
                        </Button>
                    </article>
                  </Col>
                 </Row>  
              </Container>   
            </div>
          </Jumbotron> 
        </div>
    );
  } 
}

export default Campaigns;
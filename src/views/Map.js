
import * as React from 'react';
import { useState } from 'react';
import ReactMapGl from 'react-map-gl';
import image from "../assets/img/map2.PNG"
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";


function Maps() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Google Maps</CardHeader>
             
             <img src={image}/>
               
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Maps;

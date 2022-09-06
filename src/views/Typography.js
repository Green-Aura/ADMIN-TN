import AllSuggestions from "components/AllSuggestions";
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

function Typography() {
  return (
    <>
    
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardBody>
              <AllSuggestions />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  </>
  );
}

export default Typography;

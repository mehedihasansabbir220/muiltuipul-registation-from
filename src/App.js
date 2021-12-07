import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Steps, Step } from "react-step-builder";
// import { Button, Col, Row } from "antd";
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import FinalStep from './Components/FinalStep';
import { Card, Container,Row,Col,Button  } from 'react-bootstrap';



const Navigation = (props) => {
  // console.log({ props });
  console.log(props.state );
  return (
    <Row align="center">
      <Col>
        <Button type="primary" onClick={props.prev} style={{ marginRight: 10 }}>
          Previous
        </Button>
      </Col>
      <Col>
        <Button type="primary" onClick={props.next}>
          Next
        </Button>
      </Col>
    </Row>
  );
};

function App() {
  const config = {
    navigation: {
      component: Navigation,
      location: "after" 
    }
  };



  return (
    <div className="App w-100 ">
      <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}>
                  <div className="w-100" style={{ maxWidth: "400px" }}>
                  <Card>
                  <Card.Body>
                  <Steps config={config}>
                    <Step component={Step1} />
                    <Step component={Step2} />
                    <Step component={Step3} />
                    <Step component={FinalStep} />
                  </Steps>
                  </Card.Body>
                  </Card>
                  </div>
                </Container>
   </div>
  );
}

export default App;

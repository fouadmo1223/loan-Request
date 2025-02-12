import logo from "./logo.svg";
import "./App.css";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { LoanForm } from "./LoanForm";
/////////////////////   bootstrap CSs
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="">
          <LoanForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

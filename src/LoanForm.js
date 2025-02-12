import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Swal from "sweetalert2";

export function LoanForm() {
  const Swal = require("sweetalert2");

  function errorMessage(message) {
    Swal.fire({
      title: message,
      icon: "error",
    });
  }
  const [inputs, setInputs] = useState({
    fullname: "",
    phone: "",
    age: "",
    salary: "",
    emp: false,
  });
  function checkNumber(e, tar) {
    if (!isNaN(e.target.value)) {
      setInputs({ ...inputs, [tar]: e.target.value });
    }
  }
  function isFormValid() {
    return (
      inputs.fullname.trim() !== "" &&
      inputs.phone.trim() !== "" &&
      inputs.age.trim() !== "" &&
      inputs.salary.trim() !== ""
    );
  }

  return (
    <>
      <Form className="mt-5" style={{ width: "70%" }}>
        <Row xs="auto" className="justify-content-center">
          <Col style={{ fontSize: "30px", fontWeight: "bold" }}>
            Requsting a loan
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            value={inputs.fullname}
            placeholder="Enter your name"
            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="text"
            value={inputs.phone}
            placeholder="Enter your Phone number"
            onChange={(e) => {
              checkNumber(e, "phone");
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label> age</Form.Label>
          <Form.Control
            value={inputs.age}
            type="text"
            placeholder="Enter your age"
            onChange={(e) => {
              checkNumber(e, "age");
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label> Salary</Form.Label>
          <Form.Control
            value={inputs.salary}
            type="text"
            placeholder="Enter your Salary"
            onChange={(e) => {
              checkNumber(e, "salary");
            }}
          />
        </Form.Group>
        <Form.Check // prettier-ignore
          type="checkbox"
          id="employee"
          label="are you an employee"
          style={{ fontSize: "17px" }}
          checked={inputs.emp}
          onChange={(e) => setInputs({ ...inputs, emp: e.target.checked })}
        />{" "}
        <Row className=" mt-3 justify-content-center">
          <Col style={{ width: "30%" }}>
            <Button
              disabled={!isFormValid()}
              style={{ width: "100%" }}
              variant="danger"
              onClick={() => {
                if (inputs.fullname.length < 5) {
                  errorMessage("Fullname must be at least 5 characters");
                } else if (inputs.phone.length !== 11) {
                  errorMessage("Please enter a usable phone number");
                } else if (inputs.age > 70 || inputs.age < 20) {
                  errorMessage("age must be between 20 and 70");
                } else if (inputs.salary < 10000) {
                  errorMessage("Salary must be at least 10000");
                } else {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(() => {
                    setInputs({
                      fullname: "",
                      phone: "",
                      salary: "",
                      age: "",
                      emp: false,
                    });
                  });
                }
              }}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

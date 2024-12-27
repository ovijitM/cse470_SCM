import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Customnavbar from "../../components/Customnavbar/Customnavbar";

function Signup() {
  const [validated, setValidated] = useState(false);
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    number: "",
    PickUp: "",
    Where_to_go: "",
    price: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const response = await fetch("http://localhost:8000/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${info.firstName} ${info.lastName}`,
          number: info.number,
          PickUp: info.PickUp,
          Where_to_go: info.Where_to_go,
          price: info.price,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (!data.success) {
        setErrorMessage(data.message);
      } else {
        setErrorMessage("");
        // Optionally reset the form or redirect the user
        setInfo({
          firstName: "",
          lastName: "",
          number: "",
          PickUp: "",
          Where_to_go: "",
          price: "",
        });
      }
    }

    setValidated(true);
  };

  return (
    <>
      <Customnavbar />
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card
          className="shadow-lg p-4"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <Card.Body>
            <Card.Title className="text-center mb-4">Booking</Card.Title>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    value={info.firstName}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={info.lastName}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationCustomEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your Phone number"
                      name="number"
                      value={info.number}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid number.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustomPickUp">
                  <Form.Label>Pick Up Location</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Pick Up location"
                    name="PickUp"
                    value={info.PickUp}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustomWhereToGo"
                >
                  <Form.Label>Where to Go</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Destination"
                    name="Where_to_go"
                    value={info.Where_to_go}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              {/* <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group> */}
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Confirm Booking
                </Button>
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Signup;

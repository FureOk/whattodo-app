import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function FormComp({ tasks, setTasks }) {
  const [task, setTask] = useState({name: "", isCompleted: false});
  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    // making use of a spread operator so the compiler retains previously entered data.
    setTask({name: "", isCompleted: false});
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Container className="form">
        <Row className="justify-content-between">
          <Col xs ={8} md={9}>
            <div className="form-input">
              <Form.Control
                onChange={(e) => setTask({name: e.target.value, isCompleted: false})}
                type="text"
                placeholder="What Do You Have To Do?"
                value={task.name}
                required
                onInvalid={e => e.target.setCustomValidity("Enter A Task")}


              />
            </div>
          </Col>
          <Col xs={4} md={3} className="flex-end">
            <Button className="form-button form-control" type="submit">
              Enter
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
}

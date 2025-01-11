import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormComp from "./FormComp";
import TaskListComp from "./TaskListComp";
import Footer from "./Footer";

export default function Whattodo() {

  const [tasks, setTasks] = useState([]);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task)=> task.isCompleted).length

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} className="formbg p-5 ">
          <>
            <TaskListComp tasks={tasks} setTasks={setTasks}/>
            <FormComp tasks={tasks} setTasks={setTasks} />
          </>
        </Col>
        <Col lg={12}>
            <Footer completedTasks={completedTasks} totalTasks ={totalTasks} />
        </Col>
      </Row>
    </Container>
  );

}

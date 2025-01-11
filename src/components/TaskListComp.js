import { Container, Row, Col, ListGroup } from "react-bootstrap";
import TaskItem from "./TaskItem";

export default function TaskListComp({ tasks, setTasks }) {
  const sortedTasks =tasks.slice().sort((a,b) => Number(a.isCompleted)- Number(b.isCompleted))
  return (
    <Container>
      <h3 lg={12} className="title">
        Task list
      </h3>

      <Row>
        <Col xs={12}>
          <ListGroup variant="flush" className="list">
            {sortedTasks.map((item, index) => (
              <TaskItem
                key={index}
                item={item}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

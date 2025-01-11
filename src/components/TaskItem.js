import { Button, ListGroupItem, Row, Col, Form } from "react-bootstrap";

export default function TaskItem({ item, tasks , setTasks}) {

    function handleDelete(item) {
        setTasks(tasks.filter((task)=> task !== item));      
    }

    function handleClick(item) {

        const newTasks = tasks.map((task)=> task.name === item.name ? {...task, isCompleted : !task.isCompleted}: task);
        setTasks(newTasks);   
    }

  return (
    <Row className="itemList align-items-center no-gutters" >
        <Col xs={1} md={1}>
        <Form.Check className="checkbox" onClick={()=> handleClick(item)} aria-label="Checkbox for item" checked={item.isCompleted ? true : false}/>
        </Col>
      <Col xs={8} md={9}>
        <ListGroupItem className={`list-item py-3 px-1 ${item.isCompleted ? 'completed' : " "}`}>{item.name}</ListGroupItem>
      </Col>
      <Col xs={2} md={2}>
        <Button onClick={() => handleDelete(item)} className="form-button form-control p-0 p-md-2 rounded-circle">x</Button>
      </Col>
    </Row>
  );
}


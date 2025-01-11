import { Container, Navbar} from "react-bootstrap";

export default function Header(){
    return (
        <Navbar expand="lg" className="header">
            <Container className="justify-content-center">
                <Navbar.Brand href="#" className="header-text" >What To Do</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
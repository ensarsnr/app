import { Container, Navbar } from "react-bootstrap";


function AppBar(props) {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <div className="col-4 text-center">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </div>
      <div className="col-4">
        {props.name}
      </div>
      <div className="col-4">
        {props.element}
      </div>
    </Navbar>
  );
}

export default AppBar;
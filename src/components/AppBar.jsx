import { Navbar } from "react-bootstrap";


function AppBar(props) {
  return (
    <Navbar expand="lg" variant="light" className="text-light" bg="dark">
      <div className="col-4 text-center">
        <Navbar.Brand className="text-light" href="#">Navbar</Navbar.Brand>
      </div>
      <div className="col-4">
        {props.name}
      </div>
      <div className="row col-4">
        <div className="col-6">
          {props.foodMenu}
        </div>
        <div className="col-6">
          {props.element}
        </div>
      </div>

    </Navbar>
  );
}

export default AppBar;
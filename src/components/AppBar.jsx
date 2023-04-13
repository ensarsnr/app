import { Navbar } from "react-bootstrap";
import { NAVBAR_TITLE } from "../constants/constText";
import { Link } from "react-router-dom";


function AppBar(props) {
  // Klasik bir appbar boostrapten çektim css kısmını.
  // Propslar ile diğer sayfadan name menuler çıkış işlemlerini alıp burada düzenliyoruz.
  return (
    <Navbar expand="lg" variant="light" className="text-light" bg="dark">
      <div className="col-4 text-center">
        <Navbar.Brand className="text-light">
          <Link to="/order" className="text-decoration-none text-light">{NAVBAR_TITLE}</Link>
        </Navbar.Brand>
      </div>
      <div className="col-4">
        {props.name}
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-evenly"
      }} className="col-4">
        <div>
          {props.myOrders}
        </div>
        <div>
          {props.foodMenu}
        </div>
        <div>
          {props.element}
        </div>
      </div>

    </Navbar>
  );
}

export default AppBar;
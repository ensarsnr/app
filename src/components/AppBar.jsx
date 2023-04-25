import { Navbar } from "react-bootstrap";
import { NAVBAR_TITLE } from "../constants/constText";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AppBar({ name, myOrders, foodMenu, element }) {
  // Propslar ile diğer sayfadan name menuler çıkış işlemlerini alıp burada düzenliyoruz.

  return (
    <Navbar expand="lg" variant="light" className="text-light" bg="dark">
      <div className="col-4 text-center">
        <Navbar.Brand className="text-light">
          <Link to="/order" className="text-decoration-none text-light">
            {NAVBAR_TITLE}
          </Link>
        </Navbar.Brand>
      </div>
      <div className="col-4">{name}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
        className="col-4"
      >
        <div>{myOrders}</div>
        <div>{foodMenu}</div>
        <div>{element}</div>
      </div>
    </Navbar>
  );
}

AppBar.propTypes = {
  name: PropTypes.string.isRequired,
  myOrders: PropTypes.element.isRequired,
  foodMenu: PropTypes.element.isRequired,
  element: PropTypes.element.isRequired,
};

export default AppBar;

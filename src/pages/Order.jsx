import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppBar from "../components/AppBar";
import OrderMenu from "../components/OrderMenu";
import OrderSelected from "../components/OrderSelected";
import {
  CHOOSEN_ONES,
  CHOOSE_ORDER,
  EXIT_APPBAR,
  FOOD_MENU,
  MY_ORDERS,
  WELCOME_USER,
} from "../constants/constText";
import "../App.css";

function Order() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedSurname = localStorage.getItem("surname");
    if (storedName) {
      setName(storedName);
      setSurname(storedSurname);
    }
  }, []);

  return (
    <div>
      {/* == AppBar Start == */}
      <AppBar
        element={
          <div>
            <Link to={"/"} className="text-light text-decoration-none">
              {EXIT_APPBAR}
            </Link>
          </div>
        }
        name={
          <div className="text-center">
            {WELCOME_USER} {name.toUpperCase()} {surname.toUpperCase()}
          </div>
        }
        foodMenu={
          <div className="float-end">
            <Link to="/foodMenu" className="text-light text-decoration-none">
              {FOOD_MENU}
            </Link>
          </div>
        }
        myOrders={
          <div>
            <Link to={"/waiting"} className="text-light text-decoration-none">
              {MY_ORDERS}
            </Link>
          </div>
        }
      />
      {/* == AppBar End == */}

      <div className="m-5">
        <Row className="element">
          <div className="col-md-6 col-sm-12 ">
            <h1 className="mt-5 text-center text-danger">{CHOOSE_ORDER}</h1>
            <OrderMenu />
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <h1 className="mt-5 text-center text-danger">{CHOOSEN_ONES}</h1>
            <OrderSelected />
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Order;

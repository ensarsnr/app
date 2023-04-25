import React from "react";
import AppBar from "../components/AppBar";
import { Link } from "react-router-dom";
import {
  EXIT_APPBAR,
  FOOD_MENU,
  MY_ORDERS,
  WELCOME_USER,
} from "../constants/constText";
function FoodMenu() {
  const name = localStorage.getItem("name");
  return (
    <div>
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
            {WELCOME_USER}
            {name.toUpperCase()}
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

      <div>
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12 text-center">1.Menu</div>
          <div className="col-md-4 col-sm-12 text-center">2.Menu</div>
          <div className="col-md-4 col-sm-12 text-center">3.Menu</div>
        </div>
      </div>
    </div>
  );
}

export default FoodMenu;

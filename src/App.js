import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Order from './pages/Order'
import Receiver from "./pages/Receiver";
import FoodMenu from "./pages/FoodMenu";

//router eklenir sonra
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="order" element={<Order />} />
          <Route path="receiver" element={<Receiver />} />
          <Route path="order/foodMenu" element={<FoodMenu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

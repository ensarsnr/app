import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Order from './pages/Order'
import Receiver from "./pages/Receiver";
import FoodMenu from "./pages/FoodMenu";
import Waiting from "./pages/Waiting";

//routerlar ile sayfalar arası geçişleri buradan ayarlıyoruz.
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="order" element={<Order />} />
          <Route path="receiver" element={<Receiver />} />
          <Route path="foodMenu" element={<FoodMenu />} />
          <Route path="waiting" element={<Waiting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

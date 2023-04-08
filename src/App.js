import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Order from './pages/Order'
import Receiver from "./pages/Receiver";
import FoodMenu from "./pages/FoodMenu";
import Waiting from "./pages/Waiting";
import Register from "./pages/Register";

//routerlar ile sayfalar arası geçişleri buradan ayarlıyoruz.
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/receiver" element={<Receiver />} />
          <Route path="/order/waiting" element={<Waiting />} />
          <Route path="/order/foodMenu" element={<FoodMenu />} />
          <Route path="/order/waiting/menu" element={<FoodMenu />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// <Link
//       to={`/?brand=${brand}`}
//       {...props}
//       style={{
//         ...props.style,
//         color: isActive ? "red" : "black",
//       }}
//     >
//       {children}
//     </Link>
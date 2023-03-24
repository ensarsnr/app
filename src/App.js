import {BrowserRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Order from './pages/Order'
import OrderOutput from "./components/OrderOutput";

//router eklenir sonra
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route  path="/order" element={<Order />}/>
          <Route path="/orderout" element={<OrderOutput/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

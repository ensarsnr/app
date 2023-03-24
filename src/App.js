import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar';
import Home from './pages/Home';
import Order from './pages/Order';

//router eklenir sonra
function App() {
  return (
    <>
      {/* <AppBar />
      <Home /> */}
      <Order />
    </>
  );
}

export default App;

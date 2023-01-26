import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './header';
import Login from './login';
import Register from './register';
import Add from './add';
import UpdateProducts from './updateProducts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>E-Comerce Dashboard</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/update" element={<UpdateProducts />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

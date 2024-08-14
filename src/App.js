import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Logout from "./components/Auth/Logout";
import StockList from "./components/Stocks/StockList";
import StockForm from "./components/Stocks/StockForm";
import StockDetail from "./components/Stocks/StockDetail";
import StockEdit from "./components/Stocks/StockEdit";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Redirect from "./components/Redirect";
import Profile from "./components/Profile";
import "./index.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/redirect" element={<Redirect />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/stocks"
          element={
            <PrivateRoute>
              <StockList />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-stock"
          element={
            <PrivateRoute>
              <StockForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-stock/:id"
          element={
            <PrivateRoute>
              <StockEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="/stock/:id"
          element={
            <PrivateRoute>
              <StockDetail />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

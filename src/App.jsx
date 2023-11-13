import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";
import List from "./components/List";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Router>
      <header>TODOS</header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/edit/:id" element={<EditItem />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

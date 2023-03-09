import "./App.css";
import Navbar from "./Employee/Navbar";
import AddEmployee from "./Employee/AddEmployee";
import EmployeeHome from "./Employee/EmployeeHome";
import UpdateEmployee from "./Employee/UpdateEmployee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeHome />}></Route>
          <Route path="/" element={<EmployeeHome />}></Route>
          <Route path="/employeeHome" element={<EmployeeHome />}></Route>
          <Route path="/addEmployee" element={<AddEmployee />}></Route>
          <Route path="/editEmployee/:emp_id" element={<UpdateEmployee />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
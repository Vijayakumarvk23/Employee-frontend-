import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../ServiceConnectivity/EmployeeService";

export default function AddEmployee() {
  const [employee, setEmployee] = useState({
    emp_id: "",
    address: "",
    age: "",
    mailid: "",
    name: "",
    salary: "",
    stream: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setEmployee((prevItems) => {
      return { ...prevItems, [name]: value };
    });
  }; //previous is returned

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        navigate("/employeeHome");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      emp_id: "",
      address: "",
      age: "",
      mailid: "",
      name: "",
      salary: "",
      stream: "",
    });
  };
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">Id</label>
          <input
            type="text"
            name="emp_id"
            value={employee.emp_id}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            MailId
          </label>
          <input
            type="email"
            name="mailid"
            value={employee.mailid}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Salary
          </label>
          <input
            type="text"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Stream
          </label>
          <input
            type="text"
            name="stream"
            value={employee.stream}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">Age</label>
          <input
            type="text"
            name="age"
            value={employee.age}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={employee.address}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-400 py-2 px-5 hover:bg-green-700"
          >
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 py-2 px-5 hover:bg-red-700"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
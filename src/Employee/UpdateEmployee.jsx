import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../ServiceConnectivity/EmployeeService";

export default function UpdateEmployee() {
  const { emp_id } = useParams();
  console.log(emp_id);
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    emp_id: emp_id,
    address: "",
    age: "",
    mailid: "",
    name: "",
    salary: "",
    stream: "",
  });

  useEffect(() => {
    const fetctData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(emp_id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetctData();
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, emp_id)
      .then((response) => {
        navigate("/employeeHome");
      }) //update and reflect in home
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setEmployee((prevItems) => {
      return { ...prevItems, [name]: value };
    }); //along with the previous
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">Id</label>
          <input
            type="text"
            name="id"
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
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateEmployee}
            className="rounded text-white font-semibold bg-green-400 py-2 px-5 hover:bg-green-700"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/employeeHome")}
            className="rounded text-white font-semibold bg-red-400 py-2 px-5 hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../ServiceConnectivity/EmployeeService";
import Employee from "./Employee";

export default function EmployeeHome() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
        console.log("hello");
      } catch (error) {
        console.log(error);
      }
      // setLoading(false);
    };

    fetchData();
  }, []);

  const editEmployee = (e, emp_id) => {
    e.preventDefault();
    navigate(`/editEmployee/${emp_id}`);
  };

  const deleteEmployee = (e, emp_id) => {
    e.preventDefault();
    EmployeeService.deleteById(emp_id).then((response) => {
      if (employees) {
        setEmployees((prevElements) => {
          return prevElements.filter((employee) => {
            return employee.emp_id !== emp_id;
          });
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Id
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Age
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Address
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Stream
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Salary
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                MailId
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {/* {!loading && ( */}
            <tbody className="bg-white">
              {employees.map((employee) => (
                <tr key={employee.emp_id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.emp_id}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.name}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.mailid}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.age}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.address}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.stream}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.salary}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium">
        <a
          onClick={(e) => editEmployee(e, employee.emp_id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e) => deleteEmployee(e, employee.emp_id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
              ))}
            </tbody>
          {/* )} */}
        </table>
      </div>
    </div>
  );
}
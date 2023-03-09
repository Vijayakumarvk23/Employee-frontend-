// import { useNavigate } from "react-router-dom";

// export default function Employee({ employee, deleteEmployee }) {
//   const navigate = useNavigate();

//   const editEmployee = (e, emp_id) => {
//     e.preventDefault();
//     navigate(`/editEmployee/${emp_id}`);
//   };

//   return (
//     <tr key={employee.emp_id}>
//       <td className="text-left px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-500">{employee.emp_id}</div>
//       </td>
//       <td className="text-left px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-500">{employee.name}</div>
//       </td>
//       <td className="text-left px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-500">{employee.mailid}</div>
//       </td>
//       <td className="text-left px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-500">{employee.age}</div>
//       </td>
//       <td className="text-left px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-500">{employee.address}</div>
//       </td>
//       <td className="text-left px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-500">{employee.stream}</div>
//       </td>
//       <td className="text-left px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-500">{employee.salary}</div>
//       </td>
//       <td className="text-right px-6 py-4 whitespace-nowrap font-medium">
//         <a
//           onClick={(e) => editEmployee(e, employee.emp_id)}
//           className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
//         >
//           Edit
//         </a>
//         <a
//           onClick={(e) => deleteEmployee(e, employee.emp_id)}
//           className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
//         >
//           Delete
//         </a>
//       </td>
//     </tr>
//   );
// }
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlinePerson } from "react-icons/md";

const Head =
  "text-xs text-left text-main font-semibold px-6 py-4 uppercase bg-gray-700 text-gray-200";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

const Rows = (data, i, onEditClick) => {
  return (
    <tr key={i} className="hover:bg-gray-800 transition-colors duration-200">
      {/* Employee data */}
      <td className={`${Text}`}>
        <div className="w-12 h-12 p-1 bg-dry border border-border rounded-full flex items-center justify-center">
          {data.image ? (
            <img
              src={`${process.env.PUBLIC_URL}/images/employees/${data.image}`}
              alt={data.name || "Employee"}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <MdOutlinePerson
              size={24}
              className="text-gray-400 hover:text-beige3 transition-colors duration-200"
            />
          )}
        </div>
      </td>
      <td className={`${Text}`}>{data.name}</td>
      <td className={`${Text}`}>{data.phoneNumber}</td>
      <td className={`${Text}`}>{data.email}</td>
      <td className={`${Text}`}>{data.role}</td>
      <td className={`${Text} float-right flex gap-2 items-center`}>
        <button
          onClick={() => onEditClick(data)}
          className="border border-border bg-gray-700 hover:bg-green-500 hover:text-white text-border flex items-center gap-2 rounded-lg py-1 px-3 transition-all duration-200"
        >
          Edit <FaEdit />
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center justify-center w-8 h-8 transition-all duration-200">
          <MdDelete />
        </button>
      </td>
    </tr>
  );
};

// Table Component
function Table6({ data, onEditClick }) {
  return (
    <div className="overflow-hidden relative w-full rounded-xl border border-gray-700 shadow-md">
      <table className="w-full table-auto divide-y divide-gray-800">
        <thead>
          <tr>
            <th scope="col" className={`${Head}`}>
              Icon
            </th>
            <th scope="col" className={`${Head}`}>
              Name
            </th>
            <th scope="col" className={`${Head}`}>
              Phone Number
            </th>
            <th scope="col" className={`${Head}`}>
              Email
            </th>
            <th scope="col" className={`${Head}`}>
              Role
            </th>
            <th scope="col" className={`${Head} text-right`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-800">
          {data.map((item, index) => Rows(item, index, onEditClick))}
        </tbody>
      </table>
    </div>
  );
}

export default Table6;

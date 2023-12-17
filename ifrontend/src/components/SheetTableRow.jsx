import React, { useState } from "react";

const status = ["Unsolved", "Solved"];

const SheetTableRow = ({ item }) => {
  const [selectedStatus, setSelectedStatus] = useState(status[0]);

  //   console.log(selectedStatus);
  const statusChangeHandler = (event) => {
    const sts = event.target.value;
    console.log(sts);
    setSelectedStatus(sts);
    console.log("selectedStatus", selectedStatus);
  };
  return (
    // <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <tr className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-indigo-100 transition duration-300">
      <td className="py-4 px-6">{item.sno}</td>
      <td className="py-4 px-6">{item.category}</td>
      <td className="py-4 px-6">
        <a
          href={item?.url}
          // target="_blank"
          className={
            item?.url ? "text-sky-300 hover:text-sky-600" : "text-yellow cursor-default"
          }
        >
          {item.title}
        </a>
      </td>
      <td className="py-4 px-6">{item.source}</td>
      <td className="py-4 px-6">{item.difficulty}</td>
      <td className="py-4 px-6">
        {/* <select
          onChange={statusChangeHandler}
          value={selectedStatus}
          className="form-select block w-full mt-1 rounded border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        > */}
        <select
  onChange={statusChangeHandler}
  value={selectedStatus}
  className="form-select block w-full px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
>
          <option value={selectedStatus[0]}>Unsolved</option>
          <option value={status[1]}>Solved</option>
        </select>
      </td>
    </tr>
  );
};

export default SheetTableRow;

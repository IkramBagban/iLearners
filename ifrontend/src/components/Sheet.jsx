import React from "react";
import useFetch from "../customHooks/useFetch";

const Sheet = () => {
  const { data, isLoading, isError } = useFetch("/fraz");

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
            <th scope="col" className="py-3 px-6">
              Category
            </th>
            <th scope="col" className="py-3 px-6">
              Title
            </th>
            <th scope="col" className="py-3 px-6">
              Difficulty
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="py-4 px-6">{item.id}</td>
              <td className="py-4 px-6">{item.category}</td>
              <td className="py-4 px-6">{item.title}</td>
              <td className="py-4 px-6">{item.difficulty}</td>
              <td className="py-4 px-6">
                <select
                  defaultValue={item.status}
                  className="form-select block w-full mt-1 rounded border-blue-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="Solved">Solved</option>
                  <option value="Unsolved">Unsolved</option>
                  <option value="In Progress">In Progress</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sheet;

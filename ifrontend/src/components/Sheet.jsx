import React from "react";
import useFetch from "../customHooks/useFetch";
import SheetTableRow from "./SheetTableRow";

const Sheet = () => {
  const { data, isLoading, isError } = useFetch("/sheets/");

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> */}
        <thead className="text-xs text-white uppercase bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md">
        {/* <thead className="text-xs text-white uppercase bg-gradient-to-r from-blue-500 to-blue-800 shadow-lg"> */}
        {/* <thead className="text-xs text-white uppercase bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-lg"> */}
          <tr>
            <th scope="col" className="py-3 px-6">
              SNO
            </th>
            <th scope="col" className="py-3 px-6">
              Category
            </th>
            <th scope="col" className="py-3 px-6">
              Title
            </th>
            <th scope="col" className="py-3 px-6">
              Source
            </th>
            <th scope="col" className="py-3 px-6">
              Difficulty
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Notes
            </th>
          </tr>

        </thead>
        {/* <tbody className="divide-y divide-gray-200"> */}
        <tbody className="divide-y divide-gray-200 bg-gradient-to-r from-white to-blue-50">
          {data?.map((item) => (
            <SheetTableRow key={item.sno + Math.random()} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sheet;

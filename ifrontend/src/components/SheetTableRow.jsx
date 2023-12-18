import React, { useState } from "react";
import NoteForm from "../pages/NoteForm";

const status = ["Unsolved", "Solved"];

const SheetTableRow = ({ item }) => {
  const [selectedStatus, setSelectedStatus] = useState(status[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statusChangeHandler = (event) => {
    const sts = event.target.value;
    setSelectedStatus(sts);
  };

  const openModal = () => {
    setIsModalOpen(true); // Function to open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Function to close modal
  };

  return (
    // <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <>
      <tr className="bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-indigo-100 transition duration-300">
        <td>
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto  w-full flex justify-center items-center z-50">
              <div className="bg-white p-5 rounded-lg shadow-lg w-full overflow-hidden  max-w-2xl max-h-2xl">
                {" "}
                <div className="flex justify-end">
                  <button
                    className="text-red-500 text-xl hover:text-gray-800 transition ease-in-out duration-150"
                    onClick={closeModal}
                  >
                    &times;
                  </button>
                </div>
                <NoteForm id={item.sno} />
              </div>
            </div>
          )}
        </td>
        <td className="py-4 px-6">{item.sno}</td>
        <td className="py-4 px-6">{item.category}</td>
        <td className="py-4 px-6">
          <a
            href={item?.url}
            // target="_blank"
            className={
              item?.url
                ? "text-sky-300 hover:text-sky-600"
                : "text-yellow cursor-default"
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
        <td className="py-4 px-6 flex justify-center">
          <div className="flex justify-center border p-1">
            <div
              onClick={openModal}
              href={`sheet/${item.sno}`}
              className="cursor-pointer p-1 text-sky-300 hover:text-sky-600"
            >
              +
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default SheetTableRow;

// import React from 'react';
import useFetch from '../customHooks/useFetch';

const Sheet = () => {
  const { data, isLoading, isError } = useFetch('/fraz');

  if (isError) {
    return <div>Error fetching data.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
              <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-4 px-6">{item.id}</td>
                <td className="py-4 px-6">{item.category}</td>
                <td className="py-4 px-6">{item.title}</td>
                <td className="py-4 px-6">{item.difficulty}</td>
                <td className="py-4 px-6">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      Sheet
    </div>
  );
};

export default Sheet;

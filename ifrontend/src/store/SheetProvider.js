import { createContext, useContext, useState } from "react";

export const sheetContext = createContext({
  selectedSheetData: [],
  addData: (data) => {},
  removeData: (_id) => {},
});

const SheetProvider = ({ children }) => {
  const [sdata, setSelectedSheetData] = useState([]);

  const addData = (data) => {
    const isExisting = sdata.find((d) => d._id === data._id);
    if (!isExisting) setSelectedSheetData((prev) => [...prev, data]); 

  };

  const removeData = (_id) =>{
    // const isExisting = sdata.find((d) => d._id === data._id);

    const filterData = sdata.filter(d => d._id !== _id)
    setSelectedSheetData(filterData)

  }

  const value = {
    selectedSheetData: sdata,
    addData: addData,
    removeData:removeData
  };

  return (
    <sheetContext.Provider value={value}>
      {" "}
      {/* Corrected this line */}
      {children}
    </sheetContext.Provider>
  );
};

export default SheetProvider;

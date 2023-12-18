import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import NoteForm from "./NoteForm";
import { sheetContext } from "../store/SheetProvider";

const WelcomePage = () => {
  const sheetCtx = useContext(sheetContext)

  useEffect(()=>{
    console.log('sheet cox' , sheetCtx.selectedSheetData)
  },[sheetCtx])
  return (
    <>
      
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Community!</h1>
        <p className="text-xl mb-8 text-center px-4">
          Join us to explore a world of learning, sharing, and growing together.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-2 px-4 border border-blue-400 rounded shadow">
            Explore Now
          </button>
          <button className="bg-transparent hover:bg-white text-white hover:text-blue-600 py-2 px-4 border border-white rounded shadow">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;

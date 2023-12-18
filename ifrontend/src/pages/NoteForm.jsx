// // import React from 'react';
// // import 'tailwindcss/tailwind.css';

// // const NoteForm = () => {
// //   return (
// //     <div className="p-5">
// //       <div className="border-b border-gray-300 py-2">
// //         <input
// //           className="w-full px-3 py-2 mr-4 text-gray-700 border rounded-lg focus:outline-none"
// //           type="text"
// //           placeholder="Create a new note at 0:00"
// //         />
// //         <button className="float-right text-xl text-gray-700 px-3 py-1 border rounded-full hover:bg-gray-100">
// //           +
// //         </button>
// //       </div>
// //       <div className="border-b border-gray-300 py-2 mt-4">
// //         <div className="flex justify-between items-center">
// //           <div className="text-gray-700 text-lg">
// //             <select className="border rounded px-2 py-1 mr-2">
// //               <option>Styles</option>
// //               {/* Other options */}
// //             </select>
// //             <button className="font-bold">B</button>
// //             <button className="italic">I</button>
// //             {/* Other style buttons */}
// //           </div>
// //           <div className="text-gray-700">
// //             <span>996</span>
// //           </div>
// //         </div>
// //         <textarea
// //           className="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none mt-2"
// //           placeholder="test"
// //         />
// //       </div>
// //       <div className="flex justify-end mt-4">
// //         <button className="text-gray-700 px-4 py-2 hover:bg-gray-100 border rounded">
// //           Cancel
// //         </button>
// //         <button className="text-white bg-blue-500 px-4 py-2 ml-2 border rounded hover:bg-blue-600">
// //           Save note
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default NoteForm;

// import React, { useState } from 'react';
// import 'react-quill/dist/quill.snow.css'; // include styles
// import ReactQuill from 'react-quill'; // ES6

// // const NoteForm = ({id}) => {
// //   const [note, setNote] = useState(id);

// //   const saveNote = () => {
// //     // Here you would save the note to your state, send it to a server, etc.
// //     console.log(note);
// //   };

// //   return (
// //     <div className="p-4 ">
// //       <ReactQuill className="overflow-scroll overflow-x-hidden max-h-96" heme="snow" value={note} onChange={setNote} />
// //       <button
// //         className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
// //         onClick={saveNote}
// //       >
// //         Save Note
// //       </button>
// //     </div>
// //   );
// // };

// import React, { useState } from 'react';
// import 'react-quill/dist/quill.snow.css'; // include styles
// import ReactQuill from 'react-quill'; // ES6

// const NoteForm = ({id}) => {
//   const [note, setNote] = useState('');

//   const modules = {
//     toolbar: [
//       [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
//       [{size: []}],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{'list': 'ordered'}, {'list': 'bullet'},
//        {'indent': '-1'}, {'indent': '+1'}],
//       ['link', 'image', 'video'],
//       ['clean']
//     ],
//   };

//   const formats = [
//     'header', 'font', 'size',
//     'bold', 'italic', 'underline', 'strike', 'blockquote',
//     'list', 'bullet', 'indent',
//     'link', 'image', 'video'
//   ];
import React, { useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const NoteForm = () => {
  const [note, setNote] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const quillRef = useRef(null);
  // const wordLimit = 250; 

  const handleTextChange = (content, delta, source) => {
    const text = quillRef.current.editor.getText();
    const words = text.split(/\s+/).filter(word => word.length > 0);

    // if (words.length <= wordLimit) {
      setNote(content);
      setWordCount(words.length);
    // } else {
      // const quill = quillRef.current.editor;
      // console.log(wordLimit);
      // console.log(quill.getLength());
      // quill.deleteText(wordLimit, quill.getLength());
      // quill.deleteText(wordLimit , 1)
      // setWordCount(wordLimit); 
    // }
  };

  // const handleTextChange = (content, delta, source, editor) => {
  //   const text = editor.getText();
  //   const words = text.trim().split(/\s+/); 
  
  //   if (words.length > wordLimit) {
  //     const startIndexOfExcessWords = words.slice(0, wordLimit).join(' ').length + 1;
      
  //     const charsToRemove = text.length - startIndexOfExcessWords;
  
  //     editor.deleteText(startIndexOfExcessWords, charsToRemove);
      
  //     setWordCount(wordLimit);
  //   } else {
  //     setNote(content);
  //     setWordCount(words.length);
  //   }
  // };
  

  const saveNote = () => {
    console.log(note);
  };
  
  const modules = {
    toolbar: [
      // [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        //  {'indent': '-1'}, {'indent': '+1'}
      ],
      // ['link', 'image', 'video'],
      ["link"],
      // ['clean']
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const editorStyle = {
    height: "300px",
    marginBottom: "50px", 
  };

  return (
    <div className="flex flex-col max-h-screen p-4">
      <div className="sticky top-0 z-10 bg-white" style={{ zIndex: 1020 }}>
        <ReactQuill
          theme="snow"
          value={note}
          ref={quillRef}
          // onChange={setNote}
          onChange={handleTextChange}
          style={editorStyle}
          modules={modules}
          formats={formats}
        />
      </div>
      <div className="text-right text-sm mt-2">
        {/* {wordCount}/{wordLimit} words */}
        {wordCount} words
      </div>
      <button
        className="bg-blue-500 text-white font-bold py-2  px-4 rounded mt-8 self-end"
        onClick={saveNote}
      >
        Save Note
      </button>
    </div>
  );
};

export default NoteForm;

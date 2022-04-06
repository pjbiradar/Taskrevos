// // import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import { DataContext } from "./context/Data";
// import Search from "./Search";

// const AddData = () => {
//   const navigate = useNavigate();
//   // const [data, setData] = useContext(DataContext);
//   // const [dd] = useState({ id: "", name: "" });
//   // const handleChange = (e) => {
//   //   setDd({ [e.target.name]: e.target.value });
//   // };
//   const handleSubmit = (e) => {
//     navigate("/");

//     // const tempdata = [...data];

//     // tempdata.push({ id: Date.now(), name: dd.name });
//     // setData(tempdata);
//   };
//   return (
//     <div>
//       <div className="adddata">
//       <Search/>
//       <button className="submitstyle" onClick={handleSubmit}>Add</button>
//       </div>
//     </div>
//   );
// };

// export default AddData;
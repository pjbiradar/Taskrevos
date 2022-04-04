import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddData from "./AddData";
import { DataContext } from "./context/Data";



const List = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  const[name,setName]=useState("data display")
  const [data, setData] = useContext(DataContext);


  const handleDelete = (e) => {
    const id = +e.target.value;
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  const handleClick = () => {
    navigate("/");
    setShow(true)



  };
  const handleClk = (id) => {
    // console.log("hello");

    const fill = data.filter((val) => val.id === id).map((x) => {
      return setName(x.name)
    })
    return fill



  }

  return (
    <div>


      {show ?
        <AddData /> : null}
      <div className="btn1">
        <button className="button1" onClick={handleClick}>
          <h2>Add Vehicle</h2>
        </button>
      </div>

      {data.map((value) => {
        return (
          <>

            <div className="container">

              <div>
                <button  className="button" value={value.id} onClick={()=>handleClk(value.id)} >
                  <h2>Vehicle {value.id}</h2>

                </button>
              </div>
              <div>
                <button className="deleteclick" onClick={handleDelete} value={value.id}>
                  Delete
                </button>
              </div>

            </div>
            <div className="datashow">
              {/* <h3>{value.name}</h3> */}
              {/* <p>{vehicle}</p> */}
              {name}
            </div>



          </>

        );
      })}
    </div>
  );
};

export default List;
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddData from "./AddData";
import { DataContext } from "./context/Data";
import Search from "./Search";


const List = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const [data, setData] = useContext(DataContext);

  const handleDelete = (e) => {
    const id = +e.target.value;
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  const handleClick = () => {
    navigate("/");



  };
  const display = (e) => {
    const id = +e.target.value;
    const newData = data.filter((item) => item.id === id).map((val) => {
      return <p>{val.id}</p>

    })


  }

  return (
    <div>



      <div>
        <button className="button1" onClick={handleClick}>
          <h2>Add Vehicle</h2>

        </button>
      </div>
      <span>
        <AddData />

      </span>






      {data.map((value) => {
        return (
          <>

            <div className="container">
              <div>
                <button onClick={display} className="button" value={value.id}>
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
                <h3>{value.name}</h3>
              </div>



          </>

        );
      })}
    </div>
  );
};

export default List;
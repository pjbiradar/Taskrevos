import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./context/Data";
import Chart from "react-apexcharts";
import Search from "./Search";




const List = (props) => {
  const [fill, setFill] = useState([])
  const [manage, setManage] = useState([])

  const storeee = () => {
    
   }

  useEffect(() => {
    storeee()
  }, [fill])



  const [chart] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
  })
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  const [name, setName] = useState("vehicle")
  const [data, setData] = useContext(DataContext);


  const handleDelete = (e) => {
    const id = +e.target.value;
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  }
  const handleClick = () => {
    navigate("/");
    setShow(true)
  }
  const handleClk = (id) => {
    const fill = data.filter((val) => val.id === id).map((x) => setName(x.name))
    return fill
  }

  return (
    <div>
      <div className="btn1">
        <button className="button1" onClick={handleClick}>
          <h5>Add Vehicle</h5>
        </button>
      </div>
      <div>
        {manage.map((vall) => <h1>{vall.name}</h1>)}

      </div>
      <div className="leftside">
        <h6 className="headingvehicle">vehicles:{name}</h6>
        <h4 className="vehiclestatus">vehicle status</h4>
        <div className="rowis">
          <div class="mycard">
            <div class="cardbody">
              <ul>
                <li>elevation 20m  {name}</li>
                <li>temp 20deg {name}</li>
                <li>battery 20% {name}</li>
                <li>battery 20% {name}</li>
                <li>battery 20% {name}</li>

              </ul>

            </div>
          </div>
          <div className="maintable">
            <div className="mixed-chart">
              <Chart
                options={chart.options}
                series={chart.series}
                type="bar"
                width="400"

              />
            </div>
          </div>
        </div>


        <table class="table caption-top">
          <caption>Data of vehicles</caption>
          <thead>
            <tr>
              <th scope="col">start Time</th>
              <th scope="col">Duration</th>
              <th scope="col">Max speed</th>
              <th scope="col">Average speed</th>
              <th scope="col">starting voltage</th>
              <th scope="col">Ending voltage</th>
              <th scope="col">Distance</th>
              <th scope="col">Driver Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5:18</td>
              <td>24min</td>
              <td>91kmph</td>
              <td>54kmph</td>
              <td>70.4v</td>
              <td>69.42v</td>
              <td>5.45km</td>
              <td></td>
            </tr>
            <tr>
              <td>5:18</td>
              <td>24min</td>
              <td>91kmph</td>
              <td>54kmph</td>
              <td>70.4v</td>
              <td>69.42v</td>
              <td>5.45km</td>
              <td>98.5</td>

            </tr>
            <tr>
              <td>5:18</td>
              <td>24min</td>
              <td>91kmph</td>
              <td>54kmph</td>
              <td>70.4v</td>
              <td>69.4v</td>
              <td>5.45km</td>
              <td>98.5</td>

            </tr>
            <tr>
              <td>5:18</td>
              <td>24min</td>
              <td>91kmph</td>
              <td>54kmph</td>
              <td>70.4v</td>
              <td>69.42v</td>
              <td>5.45km</td>
              <td>98.5</td>

            </tr>
            <tr>
              <td>5:18</td>
              <td>24min</td>
              <td>91kmph</td>
              <td>54kmph</td>
              <td>70.4v</td>
              <td>69.42v</td>
              <td>5.45 km</td>
              <td>98.5</td>

            </tr>
          </tbody>
        </table>
      </div>
      {show ?
        <Search setFill={setFill}  setManage={setManage}  /> : null}
      {data.map((value) => {
        return (
          <>
            <div className="posting">

              <button className="button" value={value.id} onClick={() => handleClk(value.id)} >
                <h6>Vehicle {value.id}</h6>

              </button>

              <div className="wrong">
                <h6 className="x">
                  <button className="deleteclick" onClick={handleDelete} value={value.id}>
                    x
                  </button>
                </h6>
              </div>

            </div>
            {/* {props.name} */}






          </>

        );
      })}
    </div>
  );
};

export default List;
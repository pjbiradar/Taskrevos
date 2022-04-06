import React, { useState, useContext } from 'react'
import { DataContext } from './context/Data';
// import { useNavigate } from "react-router-dom";
// import List from './List';



export default function Search(props) {
    const [vehiclesearch, setVehiclesearch] = useState("")
    const [data] = useContext(DataContext);
    const{setFill,manage,setManage}=props
    console.log(manage);
    // const navigate = useNavigate();
    const searchvehicle = (e) => {
        setVehiclesearch(e.target.value)
    }

//     const handleSubmit = (e) => { 
//         navigate("/") 
        
// }
const datafill= data.filter((item)=>{
    return vehiclesearch!==""?item.name.includes(vehiclesearch):item
})


    return (
        <div className='mainsearch'>
            <h2 className='headingofsearch'>Search Pop Over</h2>
            <div className='search'>
                <input type="text" name="text" className='searchtext' placeholder="search vehicles" onChange={searchvehicle} />
                {
                    data.filter((val) =>

                        (val.name.toLowerCase().includes(vehiclesearch.toLocaleLowerCase()))

                    )
                        .map((val) => {
                            return <div >{val.name}
                            </div>
                        })
                }
               
                <button onClick={()=>setManage([...manage,datafill,setFill])}>Add</button>

            </div>
        </div>
    )
}
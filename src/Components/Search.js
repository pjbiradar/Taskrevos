import React, { useState, useContext } from 'react'
import { DataContext } from './context/Data';


export default function Search() {
    const [vehiclesearch, setVehiclesearch] = useState("")
    const [data] = useContext(DataContext);
    //   const [dd, setDd] = useState({ id: "", name: "" });


    console.log(data);
    const searchvehicle = (e) => {
        setVehiclesearch(e.target.value)
    }
    return (
        <div className='mainsearch'>
            <h2 className='headingofsearch'>Search Pop Over</h2>
            <div className='search'>
                <input type="text" name="text" placeholder="search vehicles" onChange={searchvehicle} />
                {data.filter((val) => {
                    if (vehiclesearch === "") {
                        return val

                    } 
                    else if (val.name.toLowerCase().includes(vehiclesearch.toLocaleLowerCase())) { return val }
                }).map((val, key) => {
                    return <div>
                        {val.name}
                        {/* {val.id} */}


                    </div>

                })}

            </div>





        </div>
    )
}
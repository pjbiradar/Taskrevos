import React, { useState, useContext } from 'react'
import { DataContext } from './context/Data';


export default function Search() {
    const [vehiclesearch, setVehiclesearch] = useState("")
    const [data] = useContext(DataContext);


    console.log(data);
    const searchvehicle = (e) => {
        setVehiclesearch(e.target.value)
    }
    return (
        <div className='mainsearch'>
            <h2 className='headingofsearch'>Search Pop Over</h2>
            <div className='search'>
                <input type="text" name="text" placeholder="search vehicles" onChange={searchvehicle} />
                {
                data.filter((val) =>
                 
                (val.name.toLowerCase().includes(vehiclesearch.toLocaleLowerCase()))

                )
                    .map((val) => {
                        return <div>
                            {val.name}


                        </div>
                    })
                }
            </div>
        </div>
    )
}
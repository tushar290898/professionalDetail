import axios from 'axios'
import React, { useState, useEffect } from 'react'
import '../components/Function.css'
import '../components/Button.css'
import { Button } from '@material-ui/core'
import {
    Link
  } from "react-router-dom";

function Function() {
    //  for storing data from API
    const [userdata, setuserData] = useState([])

    // for fetching data from api
    useEffect(()=>{
        axios.get('https://reqres.in/api/users')
        .then((response)=>{
            console.log(response);  //you can see data in your browser console
            setuserData(response.data.data);
        },
        (error)=>{
            console.log(error)
        })
    },[])

    


    return (
        // render the component with repect to data that got from API
        <div>
            
         {
             userdata.map(userdatas=><div className="block" key={userdatas.id}>
                Name:      <h3>{userdatas.first_name}</h3>
                LastName:  <h3>{userdatas.last_name}</h3>
                email:     <h6>{userdatas.email}</h6>
                <Link to={`/users/${userdatas.id}`}>
                    <Button  className="button" variant="outlined">View Details</Button>
                </Link>
             
                 </div>)
         }
      
           
        </div>
    )
}

export default Function

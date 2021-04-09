import React, { useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import '../components/Details.css'
import axios from 'axios';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Details() {

    const [details, setdetails] = useState({
        first_name : "",
        last_name : "",
        email : " "
    }
     );

    const {id} = useParams();

   

   const findybyId=()=>{
        axios.get(`https://reqres.in/api/users/${id}`)
        .then((response)=>{
            console.log(response);
            setdetails(response.data.data)
        },
        (error)=>{
            console.log(error);
        })
   }

     useEffect(() => {
         findybyId();
    }, [])



    return (
        <div className="detail">
             <h1 >Details</h1>
                <div className="details"> 
                   
                    Name : <h3>{details.first_name}</h3>
                    Last Name : <h3>{details.last_name}</h3>
                    email:     <h6>{details.email}</h6>

                    <div className="icons">
                    <div><Link to={`/users/profile/${details.id}`}><TwitterIcon fontSize="large"/></Link> </div>
                    <div className="icon"><Link to={`/users/profile/${details.id}`}><FacebookIcon fontSize="large"/></Link> </div>
                    <div><Link to={`/users/profile/${details.id}`}><LinkedInIcon fontSize="large"/></Link></div>
                    </div>
                   
                    

                </div>
            
        </div>
    )
}

export default Details

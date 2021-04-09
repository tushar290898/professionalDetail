import axios from 'axios'
import React, { useState, useEffect}  from 'react'
import { useParams} from 'react-router-dom'
import '../components/Profile.css'

function Profile() {

    const [profile, setprofile] = useState({
        first_name : "",
        last_name : "",
        email     : "",
        avatar    : ""
    })

    const {id} = useParams();


    const showProfile=()=>{
        axios.get(`https://reqres.in/api/users/${id}`)
        .then((response)=>{
            console.log(response);
            setprofile(response.data.data)
        },
        (error)=>{
            console.log(error);
        })
    }

    useEffect(() => {
        showProfile();
    }, [])






    return (
        <div className="Profile">
            <h1>Social Media</h1>
            <div className="Card">
                <div className="image"><img src={profile.avatar}/></div>
                Name : <h3>{profile.first_name}</h3>
                Last Name : <h3>{profile.last_name}</h3>
                Email     : <h4>{profile.email}</h4>
            </div>
           
        </div>
    )
}

export default Profile

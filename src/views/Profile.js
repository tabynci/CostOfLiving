import React, { useEffect, useState } from "react";
import axios from 'axios'
import { functions } from "lodash";
function Profile(){
    const [err, setErr]=useState('not connected');

    const [result, setResult]=useState([])
    const UserProfile =async function(){
        try {
            var data =await axios.get("http://localhost:3005/users")
            console.log(data);
            setResult(data.data.result)
        // console.log(data.data.result);
        }catch(err){
        console.error(err);
        }
    }
    return(
        <div>

        </div>
    )
}
export default Profile;
import React, { useEffect, useState } from "react";
import axios from "axios";

function Food({history}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        const url = "http://localhost:5000/api/restricted/data";
        if(token) {
            axios
            .get(url, {
                headers: {
                    Authorization: token
                }
            })
            .then(response => {
                console.log('list', response)
                setData(response.data);
            })
            .catch(error => {
                localStorage.removeItem("token");
                history.push("/");
            });
        }
    },[]);
    if (!data) return <div>Loading</div>
    return(
        <>
        <div>
            <h2>Dishes</h2>
        </div>
        {data.map(data => 
           <div>
               <p>{data.course}</p>
               <p>{data.name}</p>
               <p>{data.technique}</p>
           </div> )}

           <button onClick={() => {
               localStorage.removeItem("token");
               history.push("/");
               window.location.reload();
           }}>
               Logout
           </button>
        </>
    );
}

export default Food;
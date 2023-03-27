import React, { useEffect, useState } from 'react';

const AllGun = () => {


  const [guns , setGuns] = useState([])


  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
    .then((res)=> res.json())
    .then(data => console.log(data))
   },[])


    return (
        <div>
            <h1>Gun Store  </h1>

        </div>
    );
};

export default AllGun;
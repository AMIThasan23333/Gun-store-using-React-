import React, { useEffect, useState } from 'react';
import SimpleGun from './SimpleGun/SimpleGun';

const AllGun = () => {


  const [guns , setGuns] = useState([])


  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
    .then((res)=> res.json())
    .then(data => setGuns(data))
   },[])


    return (


        <div>
                <h1 className='text-4xl text-center font-bold mt-4'> Welcome To Gun Store  </h1>
 
 <p className='text-center'>Shop the best collection of new and used handguns online at Guns.com. Our ever-growing inventory includes all styles, calibers, and price ranges.</p>

        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        

          
             {guns.map(( gun) => (

                   <SimpleGun
                   gun={gun}
                   ></SimpleGun>

             ) )}

                   
        </div>

        </div>
    );
};

export default AllGun;
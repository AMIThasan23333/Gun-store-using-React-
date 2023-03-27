import React from 'react';

const SimpleGun = (gun) => {

    const singlegun = gun.gun;

    const {action, bullet, category, img,name, price } = singlegun;
 
    return (
        <div>
          <div className="card  bg-base-100 shadow-xl w-full">
                    <figure className="px-10 pt-10">
                        <img  src={img} alt="Shoes" className="rounded-xl w-96 h-40 " />
                    </figure>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">

                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SimpleGun;
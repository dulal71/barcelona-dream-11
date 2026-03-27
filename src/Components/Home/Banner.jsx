import React from 'react';
import BannerImage from '../../assets/bg-shadow.png'
import Image from '../../assets/fc-barcelona-logo-png-transparent.png'
const Banner = ({setCoin}) => {
    return (
        <div className='container object-cover mx-auto mt-5 p-5 bg-linear-to-r from-red-700 to-blue-900
         '>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <div>
<img className='w-24 text-center' src={Image} alt="" />
            </div>
            <div >
<h2 className='font-bold text-2xl'> Select Your Ultimate Dream XI </h2>
            </div>
<button className='btn bg-yellow-600 border-none' onClick={()=>setCoin(0)}>Choose Your Player</button>
            </div>

         
        </div>
    );
};

export default Banner;
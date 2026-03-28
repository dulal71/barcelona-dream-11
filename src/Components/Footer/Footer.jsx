import React from 'react';
import BgImage from '../../assets/bg-shadow.png'
const Footer = () => {
    return (
        <div className='bg-black relative h-64 mt-15 ' style={{backgroundImage:`url(${BgImage})`,
        backgroundSize:'cover',
        backgroundPosition:'center'}}>
        <div className='container mx-auto bg-linear-to-r from-red-700 to-blue-900 text-center md:py-14 py-7  absolute -top-10 left-0 right-0 space-y-2 rounded-xl ' >
           <h4 className='font-bold text-white'>Contact</h4>
           <div className='join'>
 <input className='border-1 border-yellow-600 text-white font-bold pl-2' type="email" name="" id="" placeholder='Enter Your email' /> 
           <button className='btn bg-yellow-600 border-none'>submit</button>
           </div>
          
        </div>
        </div>
    );
};

export default Footer;
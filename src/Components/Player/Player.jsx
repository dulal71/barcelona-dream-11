import { User } from 'lucide';
import { Flag, User2 } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';


const Player = ({player,coin,setCoin,setSelectedPlayers,selectedPlayers}) => {
  const  [isSelected,setIsSelected] = useState(false)
   const {playerName,playerCountry,playerType,rating,foot,playerImg,position
,price}=player
console.log(selectedPlayers);
const handler = ()=>{
if(selectedPlayers.length >= 11 ){
toast.error('Max 11 players allowed');
 return;
} else{
setIsSelected(true)
setCoin(coin +1 )
setSelectedPlayers([...selectedPlayers,player])
toast(`${playerName} is selected`);
  }
}
    return (
        <div>
           <div className="card bg-base-100 shadow-md p-3 space-y-1  ">
  <figure>
    <img className='rounded-md'
      src={playerImg}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div>
 <h2 className="card-title font-bold text-md"><User2></User2>{playerName} </h2>
    </div>
   <div className='flex justify-between items-center'>
    <p className='flex gap-2 items-center text-red-700 font-bold'><Flag></Flag>{playerCountry}</p>
    <span className='btn rounded-xl text-red-800'>{playerType}</span>
   </div>
    <div className="divider"></div>
    <div className='flex justify-between items-center'>
     <h3 className='font-bold'>Rating</h3>   
     <span className='border border-yellow-600 px-2 rounded-xl'>{rating}</span>
    </div>
    <div className='flex justify-between items-center'>
        <h3  className='font-bold'>Position</h3>
        <span className='font-semibold'>{position}</span>
    </div>
    <div className=" flex justify-between items-center">
        <h3 className='font-bold'> <span className='font-bold text-red-700'>price</span> :$ {price}</h3>
      <button onClick={handler}  disabled={isSelected} className={`btn ${isSelected ?'text-gray-400': 'text-red-700'}`}>
       {isSelected? 'Selected': ' Choose Player'} 
       </button>
    </div>
  </div>
</div> 
        </div>
    );
    
};

export default Player;
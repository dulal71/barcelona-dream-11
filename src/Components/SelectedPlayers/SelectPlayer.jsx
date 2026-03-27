import React from 'react';
import { Delete, Trash2, User2, X } from 'lucide-react';
const SelectPlayer = ({player,deleteHandler}) => {
    const {playerImg,playerName,playerType} = player
    return (
        
             <div className='flex justify-between flex-col items-center shadow-lg border-gray-400 rounded-xl mt-3 p-1 w-36 '>
        
            <div className='w-24 h-24  rounded-full border-2 '>
                <img className=' w-24 h-24 rounded-full overflow-hidden object-cover' src={playerImg} alt="player image" />
            </div>
            <div className='flex flex-col justify-between items-center'>
                <div>
<div className='flex justify-center items-center '>
     <User2></User2>
<h3 className='font-bold text-sm'>{playerName}</h3>
</div>

                </div>
                <div> 
                    <button className='text-sm' onClick={()=>deleteHandler(player)}><X></X></button>   
                 </div>
            
            </div>
</div>
    
    );
};

export default SelectPlayer;
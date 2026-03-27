
import React from 'react';
import SelectPlayer from './SelectPlayer';

const SelectedPlayer = ({selectedPlayers,deleteHandler}) => {
const forwards =selectedPlayers .filter(player=> player. playerType=== 'Forward')
   const midfielder =selectedPlayers .filter(player => player. playerType==='Midfielder')
   const defender =selectedPlayers .filter(player => player. playerType==='Defender')
   const goalkeeper=selectedPlayers .filter(player => player. playerType==='Goalkeeper')
//  const {playerImg,playerName,playerType}= selectedPlayer;
  return (
    <div className='flex flex-col space-y-2 mb-5'>

    <div>
          <h2 className='text-center text-2xl mt-2 font-bold italic text-red-700'>Forwards</h2>
    <div className='flex justify-center gap-2'>
      
        {
            forwards.map((player,index)=> <SelectPlayer key={index} player={player} deleteHandler={deleteHandler}></SelectPlayer>)
        }
       
   </div>
     </div>




     <div>
        <h2 className='text-center text-2xl mt-2 font-bold italic text-red-700'>Midfielder</h2>
         <div className='flex justify-center gap-2'>
        
        {
            midfielder.map((player,index)=> <SelectPlayer key={index} player={player} deleteHandler={deleteHandler}></SelectPlayer>)
        }
       
   </div>
 </div>
    
    
    
     <div>
  <h2 className='text-center text-2xl mt-2 font-bold italic text-red-700'>Defender</h2>
    <div className='flex justify-center gap-2'>
      
        {
            defender.map((player,index)=> <SelectPlayer key={index} player={player} deleteHandler={deleteHandler}></SelectPlayer>)
        }
       
   </div>
     </div>



     <div>
<h2 className='text-center text-2xl mt-2 font-bold italic text-red-700'>goalkeeper</h2>
 <div className='flex justify-center gap-2'>
        
        {
            goalkeeper.map((player,index)=> <SelectPlayer key={index} player={player} deleteHandler={deleteHandler}></SelectPlayer>)
        }
       
   </div>
     </div>
   
  
   
   </div>

    );
};

export default SelectedPlayer;
import React from 'react';
import Player from '../Player/Player';

const AvailablePlayer = ({players ,coin,setCoin,selectedPlayers,setSelectedPlayers}) => {
   console.log(players);
   const forwards = players.filter(player=> player. playerType=== 'Forward')
   const midfielder = players.filter(player => player. playerType==='Midfielder')
   const defender = players.filter(player => player. playerType==='Defender')
   const goalkeeper= players.filter(player => player. playerType==='Goalkeeper')
   
   return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-14 '>
   {/* forwards        */}
<h2 className='text-center font-bold text-2xl text-red-700 italic'>Forward</h2>
<div className='grid md:grid-cols-3 lg:grid-cols-5 md:gap-7 lg:gap-5 border-b border-red-700 pb-2'>
    {
 forwards .map((player,index) => <Player key={index} player={player}
        setCoin={setCoin} coin={coin}
                 
     setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} ></Player>)
            }
</div>
           
  {/* midfielder         */}
   <h2 className='text-center font-bold text-2xl text-red-700 italic'>Midfielder</h2>        
 <div className='grid md:grid-cols-3 lg:grid-cols-5 md:gap-7 lg:gap-5 border-b border-red-700 pb-2'>
  {
      midfielder.map((player,index) => <Player key={index} player={player}
                 setCoin={setCoin} coin={coin}
                 
                  setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}
                  ></Player>)
}
 </div>

{/* defender */}
  <h2 className='text-center font-bold text-2xl text-red-700 italic'>Defender</h2>        
 <div className='grid md:grid-cols-3 lg:grid-cols-5 md:gap-7 lg:gap-5 border-b border-red-700 pb-2'>
  {
     defender .map((player,index) => <Player key={index} player={player}
                 setCoin={setCoin} coin={coin}
                 
                  setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}
                  ></Player>)
}
 </div>         

{/* goalkeeper */}
     <h2 className='text-center font-bold text-2xl text-red-700 italic'>Goalkeeper</h2>        
 <div className='grid md:grid-cols-3 lg:grid-cols-5 md:gap-7 lg:gap-5 border-b border-red-700 pb-2'>
  {
     goalkeeper.map((player,index) => <Player key={index} player={player}
     setCoin={setCoin} coin={coin}
      setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} ></Player>)
}
 </div>     
        </div>
    );
};

export default AvailablePlayer;
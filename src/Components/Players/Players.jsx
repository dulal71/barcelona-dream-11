import React, { use, useState} from 'react';
import AvailablePlayer from '../Availableplayers/AvailablePlayer';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({playerPromise,coin,setCoin}) => {
 const players = use(playerPromise)
const [selected , setSelected] =useState('available')
const [selectedPlayers,setSelectedPlayers]=useState([]);
    return (
        <div className='container mx-auto mt-5  '>
            <div className='flex justify-between items-center mb-5 border-b border-red-700 pb-2 px-2 md:px-0 '>
                <h1 className='font-bold md:text-2xl italic'>{selected === 'available'?"Available Players": `Selected Players(${selectedPlayers.length}/${players.length})`}</h1>
                <div className='' >
                    <button  onClick={()=>setSelected('available')} className={`btn rounded-r-none rounded-l-xl ${selected === "available" ? 'bg-[#E7FE29]' : 'bg-gray-200'}`}>Available</button>
                    <button  onClick={()=>setSelected('selected')}  className={`btn rounded-l-none rounded-r-xl ${selected === "selected" ? 'bg-[#E7FE29]' : 'bg-gray-200'}`}>Selected<span>{selectedPlayers.length}</span></button>
                </div>
            </div>       
  { selected === 'available'? <AvailablePlayer players={players} setCoin={setCoin} coin={coin}
  selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayer>: 
  <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayers> }   
   </div>
    );
};

export default Players;
                   
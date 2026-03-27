import React from 'react';
import SelectedPlayer from './SelectedPlayer';
import { toast } from 'react-toastify';
import EmptyMessage from '../EmptyMessage/EmptyMessage';
const SelectedPlayers = ({setSelectedPlayers, selectedPlayers,coin,setCoin}) => {
 const deleteHandler =(deletePlayer)=>{
const leftPlayer = selectedPlayers.filter(player => player.playerName !== deletePlayer.playerName)
setSelectedPlayers(leftPlayer)
setCoin(coin -1)
toast(`${deletePlayer.playerName} is Deleted Successfully`);

}
    return (
        <div>
            { selectedPlayers.length===0 ? <EmptyMessage></EmptyMessage> :<SelectedPlayer  selectedPlayers={selectedPlayers} deleteHandler={deleteHandler}></SelectedPlayer>
            
            //  selectedPlayers.map((selectedPlayer,index)=> <SelectedPlayer key={index}  selectedPlayer={selectedPlayer}setSelectedPlayers={setSelectedPlayers} deleteHandler={deleteHandler}></SelectedPlayer>)
          }
        </div>
    );
};

export default SelectedPlayers;
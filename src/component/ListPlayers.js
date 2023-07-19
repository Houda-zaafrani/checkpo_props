import React from 'react'
import PlayerCard from './PlayerCard';
//componnent ListPlayer take array in his argument
const ListPlayers = ({playerList}) => {
  return (
    <div style={{ margin : 10, display: "flex", justifyContent: "spaceBetween", gap: 20 }}>
      
      {playerList.map((player) => (
        //the parameter of array function we choosed same name of props of PlayerCard
        <PlayerCard player={player}/>
      ))}
    </div>
  );
};

export default ListPlayers

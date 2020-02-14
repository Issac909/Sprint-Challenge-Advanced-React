import React from "react";
import Player from "./Player";

import { Card } from 'reactstrap';

const PlayerCard = (props) => {
    return (
      <>
      {props.data.map(player => (
      <Card>
            <Player
              key={player.key}
              name={player.name}
              country={player.country}
            />      
      </Card>
          ))}
      </>
    );
}

export default PlayerCard;
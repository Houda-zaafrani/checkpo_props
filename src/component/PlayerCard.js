import React from 'react'
import Card from "react-bootstrap/Card";
//player is props
const PlayerCard = ({ player }) => {
  return (
    <div>
      {/* inline style of the card */}
      <Card
        style={{
          backgroundColor: "lightblue",
          width: "18rem",
          borderRadius: 40,
        }}
      >
        {/* get the value of image-url by using props.keyObject*/}
        <Card.Img variant="top" src={player.Image_URL} />
        <Card.Body>
          <Card.Title>{player.name}</Card.Title>
          <Card.Text>
            <h3>{player.team}</h3>
            <p>
              Nationality : {player.nationality}
              <br></br>
              Jersey number : {player.jerseyNumber}
              <br></br>
              Age :{player.age}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
// PlayerCard.defaultProps={
//   player = [
//     {
//      jerseyNumber: 1,
//     age: 35
//     },

//      {
//      jerseyNumber: 13,
//     age: 32,
//     },
//      {
//     jerseyNumber: 3,
//     age: 25,
//     },
//      {
//      jerseyNumber: 2,
//     age: 30,
//     }
//   ]
//}
export default PlayerCard

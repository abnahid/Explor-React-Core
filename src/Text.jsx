import { useState } from "react";

export default function Text() {
  const [team, setTeam] = useState(11);

  const playStyle = {
    border: "2px solid red",
    margin: "15px",
    padding: "15px",
    borderRadius: "15px",
  };

  return (
    <div style={playStyle}>
      <h3>Players: {team} </h3>
    </div>
  );
}

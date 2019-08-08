import React from "react";

export default function Display(props) {
  return (
    <div className="display">
      <p>Balls : {props.balls}</p>
      <p>Strikes : {props.strikes}</p>
      <p>Fouls : {props.fouls}</p>
      <p>Hits : {props.hits}</p>
    </div>
  );
}
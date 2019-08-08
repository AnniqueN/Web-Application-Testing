import React, { useState } from "react";
import Display from "./Display";

export default function Dashboard() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [fouls, setFouls] = useState (0)
  const [hits, setHits] = useState (0)
 
 const ballsIncrement = () => {
    if ((balls +1) < 7) {

        setBalls(balls +1);
      } else {
        setBalls(0);
      }
  };
  const strikesIncrement = () => {
    if ((strikes +1) < 7) {

        setStrikes(strikes +1);
      } else {
        setStrikes(0);
      }
  };

  const foulsIncrement = () => {
    if ((fouls +1) < 7) {

        setFouls(fouls +1);
      } else {
        setFouls(0);
      }
  };

  const hitsIncrement = () => {
    if ((hits +1) < 7) {

      setHits(hits +1);
    } else {
      setHits(0);
    }
  };

  return (
    <div className="dashboard">
      <div>
        <button onClick={() => strikesIncrement()}>Strike</button>
        <button onClick={() => ballsIncrement()}>Ball</button>
        <button onClick={() => foulsIncrement()}>Foul</button>
        <button onClick={() => hitsIncrement()}>Hit</button>
      </div>
      <Display
        balls={balls}
        setBalls={setBalls}
        strikes={strikes}
        setStrikes={setStrikes}
        fouls={fouls}
        setFouls={setFouls}
        hits={hits}
        setHits={setHits}
      />
    </div>
  );
}

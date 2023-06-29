import React from "react";
import "../styles/happinessPicker.css";

const HappinessPicker = (props) => {
  const emojiScore = ["😩", "🙁", "😐", "🙂", "😁"];

  return (
    <div className="btns__group">
      <p>{props.category}</p>
      <button onClick={() => props.changeValue(0)}>{emojiScore[0]}</button>
      <button onClick={() => props.changeValue(1)}>{emojiScore[1]}</button>
      <button onClick={() => props.changeValue(2)}>{emojiScore[2]}</button>
      <button onClick={() => props.changeValue(3)}>{emojiScore[3]}</button>
      <button onClick={() => props.changeValue(4)}>{emojiScore[4]}</button>
    </div>
  );
};

export default HappinessPicker;

import React, { useState } from "react";
import HappinessPicker from "./happinessPicker";
import "../styles/feedbackForm.css";
import { useEffect } from "react";

const FeedbackForm = () => {
  const [currFoodValue, SetCurrFoodValue] = useState(0);
  const [currServiceValue, SetCurrServiceValue] = useState(0);
  const [currMoneyValue, SetCurrMoneyValue] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    setTotalValue(currFoodValue + currServiceValue + currMoneyValue);
  }, [currFoodValue, currServiceValue, currMoneyValue]);

  const changeFoodValue = (value) => {
    SetCurrFoodValue(value);
  };
  const changeServiceValue = (value) => {
    SetCurrServiceValue(value);
  };
  const changeMoneyValue = (value) => {
    SetCurrMoneyValue(value);
  };

  return (
    <div>
      <h2>Your review is important to us !</h2>
      <div className="form">
        <HappinessPicker
          category="Food"
          currValue={currFoodValue}
          changeValue={changeFoodValue}
        />
        <HappinessPicker
          category="Service"
          currValue={currServiceValue}
          changeValue={changeServiceValue}
        />
        <HappinessPicker
          category="Value for money"
          currValue={currMoneyValue}
          changeValue={changeMoneyValue}
        />
        <p>Total Score : {totalValue} /12</p>
      </div>
    </div>
  );
};

export default FeedbackForm;

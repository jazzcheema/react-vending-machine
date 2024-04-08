import {React, useState} from "react";
import { useNavigate } from "react-router-dom";

//  const { snack } = useParams();

function Candy() {
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/");
  }

  return (
    <div>
      <p>Candy is yummy!</p>
      <div>
        <button onClick={handleSubmit}>Go Back</button>
      </div>
    </div>
  );
}

export default Candy;

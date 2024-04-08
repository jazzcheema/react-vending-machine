import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

//  const { snack } = useParams();

function Soda() {
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/");
  }

  return (
    <div>
      <p>Soda is yummy!</p>
      <div>
        <button onClick={handleSubmit}>Go Back</button>
      </div>
    </div>
  );
}

export default Soda;

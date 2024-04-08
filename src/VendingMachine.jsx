//list of snacks from the vending machine

//paths to each snack on a Link (update URL)
//navigate function()

import { Link } from "react-router-dom";

//import { useParams } from "react-router-dom"

function VendingMachine() {
  return (
    <ul>
      <li>
        <Link to="/chips">Chips</Link>
      </li>
      <li>
        <Link to="/soda">Soda</Link>
      </li>
      <li>
        <Link to="/candy">Candy</Link>
      </li>
    </ul>
  );
}

export default VendingMachine;

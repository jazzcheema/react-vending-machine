import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import RoutesList from "./RoutesList";
import NavBar from "./NavBar"

/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 */

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;

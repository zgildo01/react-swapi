import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="App-header">
      <Link to="/all-starships">Starships</Link>
      <Link to="">Pilots</Link>
    </header>
  );
}

export default NavBar;
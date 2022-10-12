import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="App-header">
      <Link to="/starships">Starships</Link>
    </header>
  );
}

export default NavBar;
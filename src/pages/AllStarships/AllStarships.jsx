import { getStarships } from "../../services/sw-api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const AllStarships = () => {
const [starship, setStarship] = useState({})

  return (
    <>
      <h1>All Starships</h1>
    </>
  );
}

export default AllStarships;
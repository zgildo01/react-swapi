import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getStarshipDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipDetails = () => {
const [starshipDetails, setStarshipDetails] = useState([])
const location = useLocation();

useEffect(() => {
  const fetchDetails = async () => {
    const starshipDetails = await getStarshipDetails(location.state.starship.url)
    setStarshipDetails(starshipDetails)
  }
  fetchDetails()
}, [location.state.starship.url])

  return (
    <>
      <div>
        <h2>Starship Details</h2>
        {starshipDetails.name ?
          <>
          <div>
            <h3>name: {starshipDetails.name}</h3>
            <h3>model: {starshipDetails.model}</h3>
            <Link
              to='/all-starships'
            >
              Return
            </Link>
          </div>
          </>
          :
          <p>Loading... </p>
        }
      </div>
    </>
  );
}

export default StarshipDetails;
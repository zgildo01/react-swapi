import { getStarships } from "../../services/sw-api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const AllStarships = () => {
const [starships, setStarships] = useState([])

useEffect(() => {
  const fetchStarshipList = async () => {
    const starshipData = await getStarships();
    setStarships(starshipData.results)
  }
  fetchStarshipList()
}, [])


  return (
    <>
      <h1 className="starships-banner">All Starships</h1>
      {starships.length ? 
      <>
        <div className="starship-div">
          {starships.map(starship =>
            <Link
              key={starship.model}
              to='/starship'
              state={{starship}}
            >
              <div className='starship-name-div'>
                {starship.name}
              </div>
            </Link>
          )}
        </div>
      </> 
      : 
      <>
        <h4>Loading all starships...</h4>
      </>}
    </>
  );
}

export default AllStarships;
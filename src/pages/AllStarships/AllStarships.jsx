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
      <h1>All Starships</h1>
      {starships.length ? 
      <>
        {starships.map(starship =>
          <Link
            key={starship.model}
            to='/starship'
            state={{starship}}
          >
            <div className='class-div'>
              {starship.name}
            </div>
          </Link>
        )}
      </> 
      : 
      <>
        <h4>Loading all starships...</h4>
      </>}
    </>
  );
}

export default AllStarships;
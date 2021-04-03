import { useState } from "react";

const Home = () => {
  const [families, setFamilies] = useState([
    {name: 'Marshall', id:1},
    {name: 'Graham', id:2},
    {name: 'Clanin', id:1}
  ])
  return ( 
    <div className="App">
      <h2>Home Page</h2>
      </div>
  )
}
 
export default Home;

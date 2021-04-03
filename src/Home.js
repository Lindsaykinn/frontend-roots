import { useState } from "react";

const Home = () => {
  const [families, setFamilies] = useState([
    {name: 'Marshall', id:1},
    {name: 'Graham', id:2},
    {name: 'Clanin', id:1}
  ])
  return ( 
    <h1>hello</h1>
  )
}
 
export default Home;

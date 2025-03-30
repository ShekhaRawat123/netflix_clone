
import seriesData from "../api/seriesData.json";
 import { Seriescard } from "./SeriesCard";

const Netflixseries = () => {
  return(
 <ul className= " grid grid-three-cols"  >
  {seriesData.map((current)=>(
       <Seriescard key={current.id} data={current} /> ) )}
  
    </ul> )
  }
    

     export default Netflixseries;
 
 // passing event handlers as props in react is a comman pattern used to allow  child component to communicate with parent

 
    
    
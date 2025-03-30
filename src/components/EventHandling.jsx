
import "./EV.css";


export const EventHandling = () => {
 const handleButtonClick =(event) =>{
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    alert("hey I am onClick Event")
}
const handleWelcomeUser = (user) => {
    console.log(`hey, ${user}, WElcome`)
}

return(<>
    <button  onClick= {handleButtonClick}>click Me</button>
    
    <br/>
    <button onClick= {()=> handleButtonClick(event)}>click Me 2</button>
    <br/>
    {/* {function Component with  inline Arrow Function} */}
    <button onClick={() => alert("hey i am inline event function")}> inline arr fun </button>
    <button onClick = {handleWelcomeUser( "vinod")}>click me</button>
    {/* { passing argument to event handlers} */}
    <button onClick = {() => handleWelcomeUser( "")}>click me</button>

</>
)

}
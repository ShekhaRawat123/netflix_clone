 export    const EventProps = () => {
const HandleWelcomeUser = (user) => {
    alert(`hey, ${user}`);
};
const handleHover = () => {
    alert(`hey thanks for hovering me`);
};



return (
<>
<WelcomeUser  onClick = {() =>  HandleWelcomeUser("vinod") } onMouseEnter={handleHover}   />     
</>



)

 }

 const WelcomeUser = (props) => {
  const {onClick, onMouseEnter} = props;

const handleGreeting =  () =>{

console.log('hey user  welcome')
  props.onClick();
}


return(
<>
<button onClick={onClick} >Click</button>
<button onMouseEnter = {onMouseEnter}  >Hover me</button>
<button onClick ={handleGreeting}  >Greeting</button>
</>




)




 }

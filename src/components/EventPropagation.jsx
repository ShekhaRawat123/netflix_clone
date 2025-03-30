import "./EV.css";
 export   const EventPropagation = ()=> {

const handleGrandParent = () => {

console.log("grandparent clicked");

}

const handleParentClick = () => {

  console.log("parent clicked");
  
  }

  const handleChildclick  = (event) => {

    console.log("child clicked");
    console.log(event);
    event.stopPropagation();
    }
return(
<section className = "main-div">
<div className="g-div" onClickCapture= {handleGrandParent}>
    <div className = "p-div"  onClickCapture ={handleParentClick}>
        <button className = "c-div"  onClickCapture = {handleChildclick}>child div</button>
  </div>  
</div>
</section>



)





}


function Profile (){
return(
<div>
<h1>
    profile card challenge
</h1>
<ProfileCard
name= "Alice"
age={30}
greeting={
    <div>
      <strong> hi Alice ,  have a wonderful day!</strong>  
        
      </div> 
}
>

<p>  Hobbies: Reading, hiking</p>
<button>contact</button>
</ProfileCard>

<ProfileCard
name = "Bob"
age = {25}
greeting = {
<div>
    <strong>
Hello bob, keep up the great work

    </strong>
    </div >
}

>
<p>
hobbies: Gaming, Cooking
</p>
<button>Contact</button>
</ProfileCard>
</div>


);


}
export default Profile;

function ProfileCard(props){
    const {name, age , greeting,children} = props
return(<>
<h2>
Name: {name}

</h2>
<p>Age: {age} </p>
<p>{greeting}</p>
<div>{children}</div>
</>);


}
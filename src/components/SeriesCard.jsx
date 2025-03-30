import style from "./Netflix.module.css";
import styled from "styled-components";


export const Seriescard = ({data}) =>{


    const { img_url, name, rating , description ,cast ,genre , watch_url }  = data;

    
      const Buttonshekhar = styled.button({
padding : "1.2rem 2.4rem",
border : 'none',
fontSize: "1.6rem", 
backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
color: "var(--btn-color)",
fontWeight: "bold",
cursor: "pointer",


      })
      // in styled components .you  can  pass a function within the temolate literal to dynamically set  css properties based or
      // props or state 

const Rating = styled.h3





 return(   <li className={ style.card} >
          <div className="img">
        <img
         src={img_url} alt={name}  style={{ width: '100%', height: '250px' }}  />
           </div>
           <div  className= "flex flex-col gap-5" style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1, // This ensures the content area takes up all available space
          paddingTop: '3.2rem', // Added padding top
          paddingLeft: '1.2rem', // Added padding left
          paddingRight: '1.2rem', // Added padding right
          paddingBottom: '1.2rem', // Consistent bottom padding for the content
        }}>
            <h2>Name:{name}</h2> 
            <h3 >Rating:<span className={ ` ${style.rating} ${rating >= 8.5? "super_hit" : "average"} `}>{rating}</span></h3>
          <p  >Genre:{genre}</p>
          <p  className="text-qxl font-bold underline">summary:{description}</p>
          <p >cast:{cast}</p>
          <div class= "flex "><a href={watch_url} target="_blank"  >          
          <Buttonshekhar rating = {rating}   > watch now</Buttonshekhar>
          </a></div>
          </div>
        
        </li>   )
    
    
 }



  
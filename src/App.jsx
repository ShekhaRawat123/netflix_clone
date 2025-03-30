// import './components/Netflix.css'; // Adjust if you need the exact case

// // import { EventHandling } from "./components/EventHandling";
// import Netflixseries from "./components/netfilixseries";
// import './index.css';
// // import "./Netflix.module.css"
// import "./components/EV.css"
// import './components/Netflix.module.css';


// // import './Netflix.module.css';
// // import styles from './Netflix.module.css';

// // import "./components/Netflix.module.css";
// // import {EventProps}  from"./components/EventProps";
// // import {EventPropagation}  from"./components/EventPropagation.jsx";
// // import  State from "./components/hooks/State";
// import State from './components/hooks/State';
// // import { State } from './components/hooks/State.jsx';  // This assumes State is exported as a named export


// export const App = ()  => {

// return(
// <section className = "container">

//     {/* <h1 className="card-heading"> List of best Netflix series</h1> */}

// <Netflixseries/>;
// {/* <EventHandling/> */}
// {/* <EventProps/> */}
// {/* <EventPropagation/> */}
// <State/>
// </section>)



// }
import './components/Netflix.css';
import Netflixseries from "./components/netfilixseries.jsx"; 
// Ensure correct case

import './index.css';
import "./components/EV.css";
import './components/netflix.module.css';
// import EventHandling from "./components/EventHandling";
// import EventProps from "./components/EventProps";
// import EventPropagation from "./components/EventPropagation";
// import State from "./components/hooks/state"; // Ensure it's correctly exported
import { State } from "./components/hooks/state";

export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix Series</h1>
      <Netflixseries />
      {/* <EventHandling /> */}
      {/* <EventProps /> */}
      {/* <EventPropagation /> */}
      <State />
    </section>
  );
};






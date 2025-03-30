import React from 'react';

  export const Practices = () => {
const student =[1];
return(
<>
<p>{student.length ===0 && "NO student found"}</p>

<p>Number of student: {student.length}</p>

</>

);
};
// import React from 'react';

// export const Practices = () => {
//   const student = [];
  
//   return (
//     <>
//       <p>{student.length === 0 ? "NO student found" : null}</p>
//       <p>Number of students: {student.length}</p>
//     </>
//   );
// };

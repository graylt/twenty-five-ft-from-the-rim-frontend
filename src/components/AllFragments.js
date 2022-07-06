// import {useState, useEffect} from 'react';
// import EditForm from '../components/EditForm';

// const AllFragments = (props) => {
//     const [fragments, setFragments] = useState(props.fragment)
//     return (
//       <>
//          <div>
// {fragments.map((fragment) => (
//     <div key={fragment.id}>
//       <ul>
//         <li>{fragment.date}</li>
//           <li>{fragment.movie}</li>
//             <li>{fragment.short}</li>
//               <li>{fragment.tv_series}</li>
//                 <li>{fragment.book}</li>
//                   <li>{fragment.play}</li>
//                     <li>{fragment.short_story}</li>
//                 </ul>
//               <div>
//         <EditForm 
//         handleUpdate={props.handleUpdate} 
//         fragmentsData={props.fragment} 
//         />
//           </div>
//         <div>
//         <button className="delete-btn" onClick={() => {
//                                 props.handleDelete(props.fragment)
//                               }}>
//                                  Delete
//                                 </button>
//                               </div>
//         {/* <button
//           className="btn btn-danger"
//           onClick={() => handleDelete(fragment.id)}
//         >
//           Delete
//         </button> */}
//       {/* </div> */}
//     </div>
//   ))}
// </div>
//       </>
//     )
//   }
 
//   export default AllFragments;
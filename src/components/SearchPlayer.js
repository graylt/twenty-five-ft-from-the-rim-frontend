// import {useState} from 'react'
// import AllPlayers from '../components/AllPlayers'
// // import PlayerContext from '../contexts/PlayerContext';

//  const SearchBar = (props) => {

//    //State:
//    const [query, setQuery] = useState("")
// //    const [showSearch, setShowSearch] = useState(false)

//    const [allPlayers, setAllPlayers] = useState([]) 
// //    const { player } = useContext(PlayerContext);

//    //Functions:
// //    const searchToggle = () => {
// //      if (showSearch === false) {
// //        setShowSearch(true)
// //      } else {
// //        setShowSearch(false)
// //      }
// //    }

//    return (
//      <>
//     <button
//       onClick={props.searchToggle}
//       className="search-btn">
//          {/* &#x1F50D; */} Search
//         </button>
//       {props.showSearch ?
//         <>
//           <div className="modal-wrapper"  onClick={props.searchToggle}>
//             <div className="search-bar-modal" onClick={e => e.stopPropagation()}>
//               <div className='search-bar-x-btn-div'>
//                 <button className='search-bar-x-btn' onClick={props.searchToggle}>
//                 &#x2715;
//                 </button>
//               </div>
//               <div className="search-bar-div">
//                 <input className="search-bar" placeholder="Search by player name or season" onChange={event => setQuery(event.target.value)}/>
//               </div>
//               {query === "" ? null:
//                 <div className="search-flexbox">
//                   {allPlayers.filter((player) => {
//                     if (query === '') {
//                       return player
//                     } else if (player.player.first_name.toLowerCase().includes(query.toLowerCase())) {
//                       return player
//                     } else if (player.player.last_name.toLowerCase().includes(query.toLowerCase())) {
//                       return player
//                     } else if (player.game.season.toLowerCase().includes(query.toLowerCase())) {
//                       return player
//                     }
//                   }).map((player) => {
//                     return(
//                       <div key={player.id}>
//                         <AllPlayers
//                         player={player}
//                         first_name={props.player.player.first_name}
//                         last_name={props.player.player.last_name}
//                         season={props.player.game.season}
//                         />
//                         {/* <h4>Player: 
//                         {props.player.player.first_name} 
//                             {props.player.player.last_name}</h4>
//                         <h4>Season: {props.player.game.season}</h4> */}
//                       </div>
//                     )
//                   })}
//               </div>}
//             </div>
//           </div>
//         </>
//       : null}
//     </>
//    )
//  }

//  export default SearchBar
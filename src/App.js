import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
// import ToggleDivImage from './components/ToggleImg';
// import ProfileDashboard from './components/ProfileDashboard';
// import Login from './components/Login';
// import Register from './components/Register';
// import Profile from './components/Profile';
// import DraggableComponent from './components/DraggableComponent';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
// import SearchPlayer from './components/SearchPlayer';
// import AllPlayers from './components/AllPlayers';

function App() {

// const [players, setPlayers] = useState([]) 
// const [profiles, setProfiles] = useState([]) 
// //profiles from the backend
// const [loggedIn, setLoggedIn] = useState({}) 
// //profiles from the backend

// const [signedIn, setSignedIn] = useState(true) 
// //temp. for testing purposes
// const [showSignIn, setShowSignIn] = useState(false)

const [fragments, setFragments] = useState([]) 
// const [allPlayers, setAllPlayers] = useState([]) 
// players from ball don't lie api

// add modal
const [show, setShow] = useState(false)

const [showSearch, setShowSearch] = useState(false)
const [query, setQuery] = useState("")

  //hides/shows searchbar
  const searchToggle = () => {
    if (showSearch === false) {
      setShowSearch(true)
      // setShowAddForm(false)
      // setShowSignIn(false)
    } else {
      setShowSearch(false)
    }
  }

  //sign in toggle
  // const signInToggle = () => {
  //   if (showSignIn === false) {
  //     setShowSignIn(true)
  //     // setShowAddForm(false)
  //     // setShowSearch(false)
  //     // setShowCart(false)
  //   } else {
  //     setShowSignIn(false)
  //   }
  // }

//route to get CMS
const getFragment = () => {
  axios.get('https://twentyfiveftfromtherim.herokuapp.com/fragments')
    //axios.get("http://localhost:3000/profile")
    .then(response => setFragments(response.data),
        err => console.log(err)
    ).catch(error => console.error(error))
}

//create route for CMS
const handleCreate = (addFragment) => {
 axios.post('https://twentyfiveftfromtherim.herokuapp.com/add', addFragment)
 .then((response) => {
   setFragments([...fragments, response.data])
 })
}

//update CMS
const handleUpdate = (editFragment) => {
 axios.put('https://twentyfiveftfromtherim.herokuapp.com/update/:id' + editFragment.id, editFragment)
 .then((response) => {
   setFragments(fragments.map((fragment) => {
     return fragment.id !== response.data.id ? fragment : response.data
   }))
 })
}

//delete CMS
const handleDelete = (deletedFragment) => {
 axios.delete('https://twentyfiveftfromtherim.herokuapp.com/delete/:id' + deletedFragment.id)
 // axios.delete('http://localhost:3000/:id' + deletedProfile.id)
 .then((response) => {
   setFragments(fragments.filter(fragment => fragment.id !== deletedFragment.id))
 })
}

// ---------------------PROFILE AUTH
//route to get profiles
// const getProfiles = () => {
//     axios.get('https://twentyfiveftfromtherim.herokuapp.com/profile')
//       //axios.get("http://localhost:3000/profile")
//       .then(response => setProfiles(response.data),
//           err => console.log(err)
//       ).catch(error => console.error(error))
// }

// ---------------------PLAYERS
//route to get players
// const getAllPlayers = () => {
//     axios.get('https://www.balldontlie.io/api/v1/stats')
//         .then(response => setAllPlayers(response.data),
//             err => console.log(err)
//         ).catch(error => console.error(error))
// }

// const getAllPlayers = () => {
//   axios.get('https://www.balldontlie.io/api/v1/stats/?seasons[]=2021').then((res) => {
//     // console.log(res.data.data)
//     // setCoins (res.data.data)
//     setAllPlayers (res.data.data)
//   })
// }

// const getAllPlayers = async (id) => {
//   try {
//     const base = process.env.REACT_APP_BASE_API_URL;
//     const response = await fetch(`${base}/players/${id}`, {
//       mode: "cors",
//       headers: {
//         "Access-Control-Allow-Origin": "https://www.balldontlie.io",
//       },
//     });
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

//Read Route
// const getBooks = () => {
//   axios.get('https://ga-bookstore-backend.herokuapp.com/api/books')
//  //  axios.get("http://localhost:8000/api/books")
//   .then(response => setBooks(response.data),
//   err=> console.log(err)
// )
// .catch(error=> console.error(error))
// }

//Create Route for books
// const handleCreate = (addBook) => {
//  axios.post('https://ga-bookstore-backend.herokuapp.com/api/books', addBook)
//  // axios.post("http://localhost:8000/api/books", addBook)
//  .then((response) => {
//    setBooks([...books, response.data])
//  })
// }

//handles profile log in request
// const handleSignIn = (profileObj) => {
//    axios.post(`https://twentyfiveftfromtherim.herokuapp.com/login`, profileObj)
//        .then((response) => {
//            console.log(response);
//            alert("Logged in Successfully");
//            console.log(response.data);
//            setLoggedIn(response.data)
//        })
// }

//handles profile log out request
// const handleSignOut = (profileObj) => {
//    axios.post(`https://twentyfiveftfromtherim.herokuapp.com/logout`, profileObj)
//        .then((response) => {
//            console.log(response);
//            alert("Logged out Successfully");
//            console.log(response.data);
//            setLoggedIn(response.data)
//        })
// }

//create new user registration
// const handleRegistration = (newProfile) => {
//    console.log(newProfile);
//    axios.post('https://twentyfiveftfromtherim.herokuapp.com/register', newProfile)
//    .then((response) => {
//        console.log(response);
//        setProfiles([...profiles, response.data])
//    })
// }

//create new user registration
// const handleVerify = (profileObj) => {
//    console.log(profileObj);
//    axios.post('https://twentyfiveftfromtherim.herokuapp.com/verify', profileObj)
//    .then((response) => {
//        console.log(response);
//        setProfiles([...profiles, response.data])
//    })
// }

//update profile
// const handleUpdate = (editProfile) => {
//  axios.put('https://twentyfiveftfromtherim.herokuapp.com/:id' + editProfile.id, editProfile)
//  .then((response) => {
//    setProfiles(profiles.map((profile) => {
//      return profile.id !== response.data.id ? profile : response.data
//    }))
//  })
// }

//Delete Route
// const handleDelete = (deletedProfile) => {
//  axios.delete('https://twentyfiveftfromtherim.herokuapp.com/:id' + deletedProfile.id)
//  // axios.delete('http://localhost:3000/:id' + deletedProfile.id)
//  .then((response) => {
//    setProfiles(profiles.filter(profile => profile.id !== deletedProfile.id))
//  })
// }

//  // Logs the user out
//  const handleLogout = () => {
//   setLoggedIn({})
// }


//Gets all data then loads page
  useEffect(() => {
    getFragment()
    axios
    .get(' https://twentyfiveftfromtherim.herokuapp.com/fragments')
        .then((response)=>{
            console.log(response)
        })
    // getAllPlayers()
    // getProfiles()
  }, [])

  return (
    <div className="wrapper">
      <header className="App-header">
        <h1>FRAGMENTS</h1>
        <div>
        
    {/* <ToggleDivImage/> */}
    {/* <DraggableComponent/> */}
    <AddForm
    handleCreate={handleCreate}
    />
    {/* <EditForm
    handleUpdate={handleUpdate}
    /> */}

{/* DISPLAY FRAGMENTS */}
    <div>
      <div>
          {fragments.map(fragment => (
            <div key={fragment.id}>
              <ul>
                <li>{fragment.date}</li>
                  <li>{fragment.movie}</li>
                    <li>{fragment.short}</li>
                      <li>{fragment.tv_series}</li>
                        <li>{fragment.book}</li>
                          <li>{fragment.play}</li>
                            <li>{fragment.short_story}</li>
                        </ul>
                      <div>
                <EditForm 
                fragment={fragment}
                handleUpdate={handleUpdate} />
                  </div>
                <div>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(fragment)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
  </div>
       

{/* SEARCH FRAGMENTS */}

            <button
      onClick={searchToggle}
      className="search-btn">
         {/* &#x1F50D; */} Search
        </button>
      {showSearch ?
        <>
          <div className="modal-wrapper"  onClick={searchToggle}>
            <div className="search-bar-modal" onClick={e => e.stopPropagation()}>
              <div className='search-bar-x-btn-div'>
                <button className='search-bar-x-btn' onClick={searchToggle}>
                &#x2715;
                </button>
              </div>
              <div className="search-bar-div">
                <input className="search-bar" placeholder="Search" onChange={event => setQuery(event.target.value)}/>
              </div>
              {query === "" ? null:
                <div className="search-flexbox">
                  {fragments.filter((fragment) => {
                    if (query === '') {
                      return fragment
                    } else if (fragment.date.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    } else if (fragment.movie.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    } else if (fragment.short.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    } else if (fragment.tv_series.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    } else if (fragment.book.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    } else if (fragment.play.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    } else if (fragment.short_story.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    }
                  }).map((fragment) => {
                    return(
                      <div key={fragment.id}>
                       <li>{fragment.date}</li>
                        <li>{fragment.movie}</li>
                          <li>{fragment.short}</li>
                            <li>{fragment.tv_series}</li>
                              <li>{fragment.book}</li>
                                <li>{fragment.play}</li>
                                  <li>{fragment.short_story}</li>
                      </div>
                    )
                  })}
              </div>}
            </div>
          </div>
        </>
      : null}
        </div>
      </header>
    </div>
  );
}

export default App;

    {/* <SearchPlayer
    searchToggle={searchToggle}
    showSearch={showSearch}
    /> */}


    
{/* 
  <div className='player'>
              {fragments.map(fragment => {
                  return <div 
                  fragment={fragment} 
                  key={fragment.id}
                  >
                  <ul>
                  <li>
                  <h4>Player: {fragment.tv_series}</h4><br/>
                  </li>
                  </ul>
                  </div>
                }
              )}
            </div> */}





// <div className='player'>
//               {allPlayers.map(player => {
//                   return <div 
//                   player={player} 
//                   key={player.id}
//                   >
//                   <ul>
//                   <li>
//                   <h4>Player: {player.player.first_name} {player.player.last_name}</h4><br/>
//                   <h4>3P%: {player.fg3_pct}</h4>
//                   <h4>3Pa: {player.fg3a}</h4>
//                   <h4>3Pm: {player.fg3m}</h4>
//                   <h4>Season: {player.game.season}</h4>
//                   </li>
                
//                   </ul>
//                   </div>
//                 }
//               )}
//             </div>


//             <button
//       onClick={searchToggle}
//       className="search-btn">
         {/* &#x1F50D; */} 
         {/* Search */}
        {/* </button>
      {showSearch ?
        <>
          <div className="modal-wrapper"  onClick={searchToggle}>
            <div className="search-bar-modal" onClick={e => e.stopPropagation()}>
              <div className='search-bar-x-btn-div'>
                <button className='search-bar-x-btn' onClick={searchToggle}>
                &#x2715;
                </button>
              </div>
              <div className="search-bar-div">
                <input className="search-bar" placeholder="Search by player name or season" onChange={event => setQuery(event.target.value)}/>
              </div>
              {query === "" ? null:
                <div className="search-flexbox"> */}
                  {/* {allPlayers.filter((player) => { */}
                    {/* if (query === '') { */}
                    //   return player
                    // } else if (player.player.first_name.toLowerCase().includes(query.toLowerCase())) {
                    //   return player
                    // } else if (player.player.last_name.toLowerCase().includes(query.toLowerCase())) {
                      // return player
                    // } else if (player.game.season.toLowerCase().includes(query.toLowerCase())) {
                    //   return player
                  //   }
                  // }).map((player) => {
                  //   return(
                  //     <div key={player.id}>
                        {/* <AllPlayers
                        player={player}
                        first_name={props.player.player.first_name}
                        last_name={props.player.player.last_name}
                        season={props.player.game.season}
                        /> */}
                        {/* <h4>Player: 
                        {player.player.first_name}{player.player.last_name}</h4>
                        <h4>Season: {player.game.season}</h4>
                      </div>
                    )
                  })}
              </div>}
            </div>
          </div>
        </>
      : null} */}
    



    {/* <Profile
      handleRegistration={handleRegistration}
      signInToggle={signInToggle}
      showSignIn={showSignIn}
      signedIn={signedIn}
      handleSignIn={handleSignIn}
      // handleSignOut={handleSignOut}
      handleLogout={handleLogout}
      loggedIn={loggedIn}
      handleDelete={handleDelete}
      // setAuth={setAuth}
      
      /> */}



  // const checkAuthenticated = async () => {
  //   try {
  //     const res = await fetch("https://twentyfiveftfromtherim.herokuapp.com/verify", {
  //       method: "POST",
  //       headers: { jwt_token: localStorage.token }
  //     });

  //     const parseRes = await res.json();

  //     parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };
  
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const setAuth = boolean => {
  //   setIsAuthenticated(boolean);
  // };
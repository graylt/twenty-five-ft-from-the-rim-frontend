import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import ToggleDivImage from './components/ToggleImg';
// import ProfileDashboard from './components/ProfileDashboard';
// import Login from './components/Login';
// import Register from './components/Register';
import Profile from './components/Profile';
import DraggableComponent from './components/DraggableComponent';






function App() {

const [profiles, setProfiles] = useState([]) 
//profiles from the backend
const [loggedIn, setLoggedIn] = useState({}) 
//profiles from the backend

const [signedIn, setSignedIn] = useState(true) 
//temp. for testing purposes
const [showSignIn, setShowSignIn] = useState(false)



const [allPlayers, setAllPlayers] = useState([]) 
// players from ball don't lie api

  //sign in toggle
  const signInToggle = () => {
    if (showSignIn === false) {
      setShowSignIn(true)
      // setShowAddForm(false)
      // setShowSearch(false)
      // setShowCart(false)
    } else {
      setShowSignIn(false)
    }
  }


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

//route to get profiles
const getProfiles = () => {
    axios.get('https://twentyfiveftfromtherim.herokuapp.com/profile')
      //axios.get("http://localhost:3000/profile")
      .then(response => setProfiles(response.data),
          err => console.log(err)
      ).catch(error => console.error(error))
}

//route to get players
const getAllPlayers = () => {
    axios.get('https://www.balldontlie.io/api/v1/stats')
        .then(response => setAllPlayers(response.data),
            err => console.log(err)
        ).catch(error => console.error(error))
}

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
const handleSignIn = (profileObj) => {
   axios.post(`https://twentyfiveftfromtherim.herokuapp.com/login`, profileObj)
       .then((response) => {
           console.log(response);
           alert("Logged in Successfully");
           console.log(response.data);
           setLoggedIn(response.data)
       })
}

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
const handleRegistration = (newProfile) => {
   console.log(newProfile);
   axios.post('https://twentyfiveftfromtherim.herokuapp.com/register', newProfile)
   .then((response) => {
       console.log(response);
       setProfiles([...profiles, response.data])
   })
}

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
const handleUpdate = (editProfile) => {
 axios.put('https://twentyfiveftfromtherim.herokuapp.com/:id' + editProfile.id, editProfile)
 .then((response) => {
   setProfiles(profiles.map((profile) => {
     return profile.id !== response.data.id ? profile : response.data
   }))
 })
}

//Delete Route
const handleDelete = (deletedProfile) => {
 axios.delete('https://twentyfiveftfromtherim.herokuapp.com/:id' + deletedProfile.id)
 // axios.delete('http://localhost:3000/:id' + deletedProfile.id)
 .then((response) => {
   setProfiles(profiles.filter(profile => profile.id !== deletedProfile.id))
 })
}

 // Logs the user out
 const handleLogout = () => {
  setLoggedIn({})
}


//Gets all data then loads page
  useEffect(() => {
    // getBooks()
    getAllPlayers()
    getProfiles()
    // checkAuthenticated()
  }, [])

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const setAuth = boolean => {
  //   setIsAuthenticated(boolean);
  // };
  

  return (
    <div className="App">
      <header className="App-header">
        <div>
        
    <ToggleDivImage/>
    <DraggableComponent/>
    <Profile
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
      
      />
    
    

   

   
         
          
        </div>
      </header>
    </div>
  );
}

export default App;

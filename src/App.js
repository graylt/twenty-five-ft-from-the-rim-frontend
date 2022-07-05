import {useState, useEffect} from 'react';
import './App.css';
import ToggleDivImage from './components/ToggleImg';
import axios from 'axios'




function App() {
  const [userAccounts, setUserAccounts] = useState([]) // user accounts from the backend

    // Testing route to get user accounts
  //   const getUserAccounts = () => {
  //     axios.get('https://twentyfiveftfromtherim.herokuapp.com/profile')
  //     //axios.get("http://localhost:8000/api/books")
  //       .then(response => setUserAccounts(response.data),
  //           err => console.log(err)
  //       ).catch(error => console.error(error))
  // }
  
    const getUserAccounts = () => {
      axios.get('https://www.balldontlie.io/api/v1/stats')
      //axios.get("http://localhost:8000/api/books")
        .then(response => setUserAccounts(response.data),
            err => console.log(err)
        ).catch(error => console.error(error))
  }

  //Gets all books then loads page
  useEffect(() => {
    // getBooks()
    // getBookreviews()
    getUserAccounts()
  }, [])
  

  return (
    <div className="App">
      <header className="App-header">
        <div>
        
    <ToggleDivImage/>

   
         
          
        </div>
      </header>
    </div>
  );
}

export default App;

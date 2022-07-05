import {useState, useEffect} from 'react';

const ProfileRegistration = (props) => {

    //State:
      const emptyProfile = {
          username: "",
          email: "",
          password: ""
      }
  
      const [newProfile, setNewProfile] = useState(emptyProfile)
      const [login, setLogin] = useState(true)
  
      // const [logout, setLogOut] = useState(true)
  
  
  
    //Functions:
      const loginToggle = () => {
        if (login === false) {
          setLogin(true)
        } else {
          setLogin(false)
        }
      }
  
      const handleChange = (event) => {
        setNewProfile({...newProfile, [event.target.name]: event.target.value})
      }
  
      const handleSubmit = (event) => {
        event.preventDefault()
        const profileObj = {
            username: newProfile.name,
            email: newProfile.email,
            password: newProfile.password
        }
        // console.log(newUser);
        if (login) {
            props.handleSignIn(profileObj)
            // console.log(userObj);
        } else {
            props.handleRegistration(newProfile)
        }
      }
  
      return (
        <>
          <button onClick={props.signInToggle} className="sign-in-btn">Account</button>
          {props.showSignIn ?
            <>
              <div className="modal" onClick={props.signInToggle}>
              {/* <div className="modal-wrapper" onClick={props.signInToggle}> */}
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                {/* <div className="create-acc-si-modal" onClick={e => e.stopPropagation()}> */}
                  <div className='create-acc-si-x-btn-div'>
                    <button className='create-acc-si-x-btn' onClick={props.signInToggle}>
                    &#x2715;
                    </button>
                  </div>
                  {login ?
                    <>
                      <h3 className="modal-header">Account</h3>
                      <h3 className="modal-sign-in-header">Account</h3>
                      {props.loggedIn.name ?
                        <div className="account-toggle-btn">
                          <button className="modal-button" onClick={props.handleLogout}>Sign out</button>
                          {/* <button className="modal-sign-out-btn" onClick={props.handleLogout}>Sign out</button> */}
                        </div>
                      :
                        <>
                        <div className="create-acc-si-div">
                          <form className="sign-in-form-container" onSubmit={handleSubmit}>
                              <label htmlFor="username"> Username: </label>
                              <input className="account-input" type="text" name="name" onChange={handleChange} required/>
                              <br/>
                              <br/>

                              <label htmlFor="username"> Email: </label>
                              <input className="account-input" type="text" name="email" onChange={handleChange} required/>
                              <br/>
                              <br/>
  
                              <label htmlFor="password"> Password: </label>
                              <input className="account-input" type="password" name="password" onChange={handleChange} required/>
                              <br/>
                              <br/>
                              <div className='add-submit-btn-div'>
                                <input type='submit' value="Sign in"/>
                              </div>
                              {/* <Edit handleUpdate={props.handleUpdate} bookData={props.book} editFormToggle={editFormToggle}/> */}
                            </form>
                          </div>
                        <div className="account-toggle-btn">
                          <button className="modal-sign-in-btn" onClick={loginToggle}>Create Account</button>
                          <button className="delete-btn" onClick={() => {
                                props.handleDelete(props.profile)
                              }}>
                                Delete
                                </button>
                        </div>
                        </>
                      }
                    </>
                    :
                    <>
                      <h3> New User Registration </h3>
                      <div className="create-acc-si-div">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name"> Username: </label>
                            <input type="text" name="username" onChange={handleChange} required/>
                            <br/>
                            <br/>
  
                            <label htmlFor="email"> Email: </label>
                            <input type="email" name="email" onChange={handleChange} required/>
                            <br/>
                            <br/>
  
                            <label htmlFor="password"> Password: </label>
                            <input type="text" name="password" onChange={handleChange} required/>
                            <br/>
                            <br/>
  
                            <div className='add-submit-btn-div'>
                              <input className="sign-in-submit-btn" type='submit'/>
                            </div>
                        </form>
                        <div className="account-toggle-btn">
                          <button onClick={loginToggle}>Already have an account? Login</button>
                        </div>
                      </div>
                    </>
                  }
                </div>
              </div>
            </>
          : null}
        </>
      )
  
  }
  
  export default ProfileRegistration
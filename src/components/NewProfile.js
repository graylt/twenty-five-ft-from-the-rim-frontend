import React, {useState} from 'react'

const ProfileRegistration = (props) => {

  //State:
    const emptyProfile = {
        name: "",
        email: "",
        password: "" 
    }

    const [newProfile, setNewProfile] = useState(emptyProfile)
    const [login, setLogin] = useState(true)



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
          name: newProfile.name,
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
        <button onClick={props.signInToggle} className="sign-in-btn">Profile</button>
        {props.showSignIn ?
          <>
            <div className="modal-wrapper" onClick={props.signInToggle}>
              <div className="create-acc-si-modal" onClick={e => e.stopPropagation()}>
                <div className='create-acc-si-x-btn-div'>
                  <button className='create-acc-si-x-btn' onClick={props.signInToggle}>
                  &#x2715;
                  </button>
                </div>
                {login ?
                  <>
                    <h3 className="modal-sign-in-header">Profile</h3>
                    {props.loggedIn.name ?
                      <div className="account-toggle-btn">
                        <button className="modal-sign-out-btn" onClick={props.handleLogout}>Sign out</button>
                      </div>
                    :
                      <>
                      <div className="create-acc-si-div">
                        <form className="sign-in-form-container" onSubmit={handleSubmit}>
                            <label htmlFor="name"> Name: </label>
                            <input className="account-input" type="text" name="name" onChange={handleChange} required/>
                            <br/>
                            <br/>

                            <label htmlFor="email"> Email: </label>
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
                          </form>
                        </div>
                      <div className="account-toggle-btn">
                        <button className="modal-sign-in-btn" onClick={loginToggle}>Create Profile</button>
                      </div>
                      </>
                    }
                  </>
                  :
                  <>
                    <h3> Register </h3>
                    <div className="create-acc-si-div">
                      <form onSubmit={handleSubmit}>
                          <label htmlFor="name"> Name: </label>
                          <input type="text" name="name" onChange={handleChange} required/>
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

                          {/* <label htmlFor="first_name"> First Name: </label>
                          <input type="text" name="first_name" onChange={handleChange} required/>
                          <br/>
                          <br/>

                          <label htmlFor="last_name"> Last Name: </label>
                          <input type="text" name="last_name" onChange={handleChange} required/>
                          <br/>
                          <br/> */}

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

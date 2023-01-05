import {useState,useContext} from 'react'

import Popup from 'reactjs-popup'


import ARContext from '../../context/ARContext'

import './index.css'

const roleTypeList=[
    {
      id: 1,
      roleName: "Admin"
    },
    {
      id: 2,
      roleName: "Owner"
    },
    {
      id: 3,
      roleName: "Sales"
    },
  ]

const SigInModal=() => {
    const {allUsersData, storeUsersData}=useContext(ARContext)

    const [username, setUsername]=useState('')
    const [emailId, setEmailId]=useState('')
    const [role, setRole]=useState('Admin')
    const [errorMessage, setErrorMessage]=useState('')
    const [isError, setError]=useState(false)

      const onSubmitForm = event => {
        event.preventDefault()
        if (username === '') {
          setError(true)
          setErrorMessage('Username Should Not be empty*')
        }
        else if (emailId === '') {
          setError(true)
          setErrorMessage('Email ID Should Not be empty*')
        }
        if (username !== '' && emailId !== '' && role !== '') {
          setError(false)

          let idOfNewUser
          if (allUsersData.length === 0) {
            idOfNewUser=1
          }
          else {
            let IdOfAllUsers=allUsersData.map(eachUser => eachUser.id)
            let latestId=Math.max(...IdOfAllUsers)
            idOfNewUser=(latestId)+1
          }

          const newUserObject={
              id: idOfNewUser,
              username,
              emailId,
              role,
              loginTimeText: new Date()
          }
          storeUsersData(newUserObject)
          setUsername('')
          setEmailId('')
          setRole('')
        }

      }
          

    return(
            <Popup modal trigger={<button className='add-user-button' type='button'>ADD USER</button>}>
                {close => (
                    <div className='popup-main-container'>
                        <div className='popup-inside-left-container'>
                            <img src='https://res.cloudinary.com/dmlsr6cgb/image/upload/v1672607806/adduser_mawi1x.png' className='add-user-image' alt='user'/>
                            <p className='add-user-description-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stadard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className='popup-inside-right-container'>
                            <p className='user-information-text'>User Information</p>
                            <form className="form-container" onSubmit={onSubmitForm}>
                                <label className="label-text" htmlFor="username">
                                Username
                                </label>
                                <input
                                onChange={event => {
                                  setUsername(event.target.value)}}
                                value={username}
                                id="username"
                                className="input-element"
                                type="text"
                                placeholder='Enter Your Name Here'
                                />
                                <label className="label-text" htmlFor="emailId">
                                Eamil Id of User
                                </label>
                                <input
                                onChange={event => setEmailId(event.target.value)}
                                value={emailId}
                                id="emailId"
                                className="input-element"
                                type="text"
                                placeholder='Enter Your Email ID Here'
                                />
                                <label htmlFor='selectRole' className='label-text'>Role</label>
                                <select id='selectRole' value={role} onChange={event => setRole(event.target.value)} className='select-styles'>
                                    {roleTypeList.map(eachItem => <option key={eachItem.id} value={eachItem.roleName} className='option-text'>{eachItem.roleName}</option>)}
                                </select>
                                <div className='buttons-container'>
                                    <button type="button" className="cancel-button" onClick={() => close()}>
                                    Cancel
                                    </button>
                                    <button type="submit" className="add-button">
                                    Add
                                    </button>
                                </div>
                                {isError && <p className='error-message'>{errorMessage}</p>}
                            </form>
                        </div>
                    </div>
                )}
            </Popup>
    )
}

export default SigInModal
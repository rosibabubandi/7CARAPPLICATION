import {useState,useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import Settings from './components/Settings'
import NotFound from './components/NotFound'

import ARContext from './context/ARContext'

import './App.css';

const App = () => {
    const [activeTab, setActiveTab]=useState('settings')
    const [allUsersData, setUsersData]=useState(() => {
        return JSON.parse(localStorage.getItem('arUsersData')) || []
      });
        
      useEffect(() => {
        localStorage.setItem('arUsersData', JSON.stringify(allUsersData));
      }, [allUsersData]);

    const changeTab=tabName => {
        setActiveTab(tabName)
    }
    const storeUsersData=newUserObject => {
        let localStorageUsersData=JSON.parse(localStorage.getItem('arUsersData'))
        const updatedUsersData=[...localStorageUsersData, newUserObject]

        localStorage.setItem('arUsersData', JSON.stringify(updatedUsersData))
        setUsersData(updatedUsersData)
    }

    const onDeleteUser=id => {
        let localStorageUsersData=JSON.parse(localStorage.getItem('arUsersData'))
        const filteredUsersData=localStorageUsersData.filter(eachUser => eachUser.id !== id)

        localStorage.setItem('arUsersData', JSON.stringify(filteredUsersData))
        setUsersData(filteredUsersData)
    }
        return(
            <ARContext.Provider value={{activeTab, allUsersData, changeTab:changeTab, storeUsersData:storeUsersData, onDeleteUser: onDeleteUser}}>
                <Routes>
                    <Route exact path='/' element={<Settings/>}/>
                    <Route path='/not-found' component={NotFound}/>
                </Routes>
            </ARContext.Provider>
        )
}

export default App;

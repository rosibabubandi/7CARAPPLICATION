import {useState,useEffect} from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'

import Settings from './components/Settings'
import Products from './components/Products'
import DemoScript from './components/DemoScript'
import Customers from './components/Customers'
import SalesTeam from './components/SalesTeam'
import Demo from './components/Demo'
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
                    <Route exact path='/products' element={<Products/>}/>
                    <Route exact path='/demoscript' element={<DemoScript/>}/>
                    <Route exact path='/customers' element={<Customers/>}/>
                    <Route exact path='/sales' element={<SalesTeam/>}/>
                    <Route exact path='/demo' element={<Demo/>}/>
                    <Route path='/not-found' element={<NotFound/>}/>
                    <Route path="*" element={<Navigate to="/not-found" replace />}/>
                </Routes>
            </ARContext.Provider>
        )
}

export default App;

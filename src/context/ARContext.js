import React from 'react'

const ARContext=React.createContext({
    activeTab: 'settings',
    changeTab: ()=>{},
    allUsersData:[],
    storeUsersData: () => {},
    onDeleteUser: () => {}
})

export default ARContext
import {useContext} from 'react'
import {formatDistanceToNow} from 'date-fns'
import ARContext from '../../context/ARContext'
import { Table } from 'antd'
import Header from '../Header'
import Sidebar from '../Sidebar'
import SigInModal from '../SignInModal'
import {DeleteOutlined} from '@ant-design/icons'

import './index.css'

const Settings=() => {
    
    const {allUsersData, onDeleteUser}=useContext(ARContext)

    const localStorageData = JSON.parse(localStorage.getItem('arUsersData'))
    let arUsersList

    if (localStorageData === undefined) {
        arUsersList=allUsersData
    }
    else {
        arUsersList=localStorageData
    }

    console.log(arUsersList)
    
    const columns = [
        {
            key : '1',
            title : '#',
            dataIndex : 'id'
        },
        {
            key : '2',
            title : 'User',
            dataIndex : 'username',
            sorter : (a,b)=>{
                return a.username.localeCompare(b.username)
            }
        },
        {
            key : '3',
            title : 'Last Signed In',
            dataIndex : 'loginTimeText',
            sorter : (a,b)=>{
                return a.loginTimeText.localeCompare(b.loginTimeText)
            },
            render : (record)=>{
                const createdAt = formatDistanceToNow(new Date(record)).split(' ')
                return `${createdAt.join(' ')} ago`
            }
        },
        {
            key : '4',
            title : 'Role',
            dataIndex : 'role',
            sorter : (a,b)=>{
                return a.role.localeCompare(b.role)
            }
        },
        {
            key:'5',
            title : '',
            render : (record)=>{
                return <DeleteOutlined className='delete-icon' onClick={() => {deleteUser(record.id)}}/>
            }
        }
    ]

     const deleteUser=id => {
         onDeleteUser(id)
    }

    return(
        <>
            <Header />
            <div className='settings-main-container'>
                <Sidebar/>
                <div className='settings-container'>
                    <div className='only-modal-container'>
                        <SigInModal/>
                    </div>
                        <Table style={{width:800,color:'black',backgroundColor:'white'}}
                        dataSource={arUsersList}
                        pagination={{
                            pageSize:5
                        }}
                        columns={columns}
                        />
                </div>
            </div>
        </>
    )
}

export default Settings


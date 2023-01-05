import { useContext } from 'react'
import {Link} from 'react-router-dom'

import ARContext from '../../context/ARContext'

import './index.css'

const Sidebar=() => {
            const {activeTab, changeTab}=useContext(ARContext)

            return(
                <div className='side-bar-main-container'>
                    <Link className='link-element' to='/products'>
                        <div className={activeTab==='products'?'active-tab-container':'normal-tab-container'} onClick={() => changeTab('products')}>
                            <p className='tab-text'>Products</p>
                        </div>
                    </Link>
                    <Link className='link-element' to='/demoscript'>
                        <div className={activeTab==='demoscript'?'active-tab-container':'normal-tab-container'} onClick={() => changeTab('demoscript')}>
                            <p className='tab-text'>Demo Script</p>
                        </div>
                    </Link>
                    <Link className='link-element' to='/customers'>
                        <div className={activeTab==='customers'?'active-tab-container':'normal-tab-container'} onClick={() => changeTab('customers')}>
                            <p className='tab-text'>Customers</p>
                        </div>
                    </Link>
                    <Link className='link-element' to='/sales'>
                        <div className={activeTab==='sales'?'active-tab-container':'normal-tab-container'} onClick={() => changeTab('sales')}>
                            <p className='tab-text'>Sales Team</p>
                        </div>
                    </Link>
                    <Link className='link-element' to='/demo'>
                        <div className={activeTab==='demos'?'active-tab-container':'normal-tab-container'} onClick={() => changeTab('demos')}>
                            <p className='tab-text'>Demos</p>
                        </div>
                    </Link>
                    <Link className='link-element' to='/'>
                        <div className={activeTab==='settings'?'active-tab-container':'normal-tab-container'} onClick={() => changeTab('settings')}>
                            <p className='tab-text'>Settings</p>
                        </div>
                    </Link>
                </div>
            )
        
            }

export default Sidebar
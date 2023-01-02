import { useContext } from 'react'
import {Link} from 'react-router-dom'

import ARContext from '../../context/ARContext'

import './index.css'

const Sidebar=() => {
            const {changeTab}=useContext(ARContext)

            return(
                <div className='side-bar-main-container'>
                    <div className='normal-tab-container' onClick={() => changeTab('products')}>
                        <p className='tab-text'>Products</p>
                    </div>
                    <div className='normal-tab-container' onClick={() => changeTab('demoscript')}>
                        <p className='tab-text'>Demo Script</p>
                    </div>
                    <div className='normal-tab-container' onClick={() => changeTab('customers')}>
                        <p className='tab-text'>Customers</p>
                    </div>
                    <div className='normal-tab-container' onClick={() => changeTab('sales')}>
                        <p className='tab-text'>Sales Team</p>
                    </div>
                    <div className='normal-tab-container' onClick={() => changeTab('demos')}>
                        <p className='tab-text'>Demos</p>
                    </div>
                    <Link className='link-element' to='/'>
                        <div className='active-tab-container' onClick={() => changeTab('settings')}>
                            <p className='tab-text'>Settings</p>
                        </div>
                    </Link>
                </div>
            )
        
            }

export default Sidebar
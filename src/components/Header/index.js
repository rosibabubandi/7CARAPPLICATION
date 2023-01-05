import {useContext} from 'react'
import {Link} from 'react-router-dom'

import ARContext from '../../context/ARContext'

import './index.css'

const Header=() => {
    const {changeTab}=useContext(ARContext)
    return(
        <div className='header-main-container'>
            <img src='https://res.cloudinary.com/dmlsr6cgb/image/upload/v1672408294/HelloAR_zvbtcw.png' className='hello-ar-image-size' alt='HELLOAR'/>
            <div className='header-bottom-container'>
                <Link className='link-element' to='/'>
                    <div className='ar-my-application-profile-container' onClick={() => changeTab('settings')}>
                        <img src='https://images.yourstory.com/cs/images/companies/HelloAR-1610803596799.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff' className='ar-image' alt='ar'/>
                        <p className='my-application-text'>MY APPLICATION</p>
                    </div>
                </Link>
                <div className='ar-my-application-profile-container'>
                    <img src='https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png' className='user-profile-image' alt='user'/>
                    <p className='my-application-text'>Barde Ridel</p>
                </div>
            </div>
        </div>
    )
}

export default Header
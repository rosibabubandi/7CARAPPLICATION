import './index.css'

const Header=() => (
    <div className='header-main-container'>
        <img src='https://res.cloudinary.com/dmlsr6cgb/image/upload/v1672408294/HelloAR_zvbtcw.png' className='hello-ar-image-size' alt='HELLOAR'/>
        <div className='header-bottom-container'>
            <div className='ar-my-application-profile-container'>
                <img src='https://images.yourstory.com/cs/images/companies/HelloAR-1610803596799.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff' className='ar-image' alt='ar'/>
                <p className='my-application-text'>MY APPLICATION</p>
            </div>
            <div className='ar-my-application-profile-container'>
                <img src='https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png' className='user-profile-image' alt='user'/>
                <p className='my-application-text'>Barde Ridel</p>
            </div>
        </div>
    </div>
)

export default Header
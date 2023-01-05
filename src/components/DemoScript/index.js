import Header from '../Header'
import Sidebar from '../Sidebar'

import './index.css'

const DemoScript=() => {
    
    
    return(
        <>
            <Header />
            <div className='demoscript-main-container'>
                <Sidebar/>
                <div className='demoscript-container'>
                    <h1 className='demoscript-heading'>Demo Script</h1>
                </div>
            </div>
        </>
    )
}

export default DemoScript


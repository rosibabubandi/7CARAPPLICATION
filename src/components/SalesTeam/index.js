import Header from '../Header'
import Sidebar from '../Sidebar'

import './index.css'

const SalesTeam=() => {
    
    
    return(
        <>
            <Header />
            <div className='sales-main-container'>
                <Sidebar/>
                <div className='sales-container'>
                    <h1 className='sales-heading'>Sales Team</h1>
                </div>
            </div>
        </>
    )
}

export default SalesTeam


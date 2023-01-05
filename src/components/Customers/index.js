import Header from '../Header'
import Sidebar from '../Sidebar'

import './index.css'

const Customers=() => {
    
    
    return(
        <>
            <Header />
            <div className='customers-main-container'>
                <Sidebar/>
                <div className='customers-container'>
                    <h1 className='customers-heading'>Customers</h1>
                </div>
            </div>
        </>
    )
}

export default Customers


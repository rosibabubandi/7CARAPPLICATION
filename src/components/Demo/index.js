import Header from '../Header'
import Sidebar from '../Sidebar'

import './index.css'

const Demo=() => {
    
    
    return(
        <>
            <Header />
            <div className='demo-main-container'>
                <Sidebar/>
                <div className='demo-container'>
                    <h1 className='demo-heading'>Demo</h1>
                </div>
            </div>
        </>
    )
}

export default Demo


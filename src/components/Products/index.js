import Header from '../Header'
import Sidebar from '../Sidebar'

import './index.css'

const Products=() => {
    
    
    return(
        <>
            <Header />
            <div className='products-main-container'>
                <Sidebar/>
                <div className='products-container'>
                    <h1 className='products-heading'>Products</h1>
                </div>
            </div>
        </>
    )
}

export default Products


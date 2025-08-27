import React from 'react'
import Navbar from '../components/Navbar'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Navbar/>
        <div className='pt-[3.4rem] p-3'>
            {children}
        </div>
    </div>
  )
}

export default layout
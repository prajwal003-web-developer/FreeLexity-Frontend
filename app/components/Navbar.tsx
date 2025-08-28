'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React, { useState } from 'react'
import { GiAirZigzag } from 'react-icons/gi'
import { MdSearch } from 'react-icons/md'

const Navbar = () => {

  const navigation = useRouter()
  
    const [Query, setQuery] = useState('')
  
    const HandleClick = (e:any)=>{
      e.preventDefault()
      navigation.push(`/search?query=${Query}`)
    }
  return (
    <nav className='py-3 fixed top-0 left-0 right-0 px-3 flex justify-between items-center bg-white z-30 border-b border-solid border-gray-400'>
        <Link className='text-center w-fit sm:text-lg text-[.6rem] tracking-tighter flex flex-row justify-center items-center md:text-xl select-none cursor-pointer font-bold bg-gradient-to-l from-pink-600 to-orange-500 via-gray-800 bg-clip-text text-transparent' href={'/'}>  FREELEXITY <GiAirZigzag color='orange' /></Link>
        <form onSubmit={HandleClick} className='w-[15rem] md:w-[23rem] border border-solid border-gray-300 rounded-xl flex items-center'>
            <input value={Query} onChange={(e)=>{setQuery(e.target.value)}} type="text" className='flex-1 p-1 border-none outline-none' placeholder='Search New Thought'/>
             <button type='submit' className='min-w-[2rem]'>
                <MdSearch size={'1.4rem'}/>
            </button>
        </form>
    </nav>
  )
}

export default Navbar
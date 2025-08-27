'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { GiAirZigzag } from 'react-icons/gi'
import { MdSearch } from 'react-icons/md'
import {nanoid} from 'nanoid'

const SearchHome = () => {

  const navigation = useRouter()

  const [Query, setQuery] = useState('')

  const HandleClick = (e:any)=>{
    e.preventDefault()
    const searchId = nanoid()

    navigation.push(`/search?query=${Query}&searchid=${searchId}`)
  }
  return (
     <div className='md:min-w-[33rem] w-full flex flex-col gap-3 justify-center items-center'>
              <h2 className='text-center w-fit text-2xl flex flex-row justify-center items-center md:text-4xl select-none cursor-pointer font-bold bg-gradient-to-l from-pink-600 to-orange-500 via-gray-800 bg-clip-text text-transparent'>
                  FREELEXITY <GiAirZigzag color='orange' />
              </h2>
              <form onSubmit={HandleClick} className='rounded-xl overflow-hidden border-solid w-full md:w-[37rem] mt-4 flex items-center border-gray-400 border'>
                  <input value={Query} onChange={(e)=>{
                    setQuery(e.target.value)
                  }} type="text" className='h-full flex-1 p-1 border-none outline-none' placeholder='Ask Any Thing You Want??' />
                  <button onClick={HandleClick} className='flex gap-1 justify-center items-center px-6 py-2 cursor-pointer font-semibold text-gray-600 bg-[#00000032]'>
                    <MdSearch />
                    <span className='hidden md:block'> Search</span>
                  </button>
              </form>
        </div>
  )
}

export default SearchHome
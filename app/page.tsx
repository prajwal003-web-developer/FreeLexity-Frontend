import React from 'react'
import { GiAirZigzag } from "react-icons/gi";
import { MdSearch } from 'react-icons/md';
import SearchHome from './components/SearchHome';
import Footer from './components/Footwe';

const page = () => {


  return (
    <>
      <div className=' min-h-[63.9dvh] flex justify-center items-center p-4'>
        <SearchHome />
      </div>
      <Footer/>
    </>
  )
}

export default page
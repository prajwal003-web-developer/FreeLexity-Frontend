import React from 'react'
import { Suspense } from "react";
import AIBody from './components/AIBody'
import SearchBody from './components/SearchBody'
import Header from './components/Header'


const page = () => {


  return (
    <Suspense fallback={<p>Loading search…</p>}>
      <Header/>
      <AIBody />
      <SearchBody />
    </Suspense>
  )
}

export default page
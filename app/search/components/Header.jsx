'use client'

import { useSearchParams } from "next/navigation";
import React from 'react'

const Header = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query");
    return (

        <h1 className="md:text-lg text-sm font-bold my-4">Results for: {query}</h1>
    )
}

export default Header
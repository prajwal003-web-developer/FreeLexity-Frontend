"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useStore } from "@/app/contexts/searchStore";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BiSend } from "react-icons/bi";

const AIBody = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const searchid = useStore(s => s.searchid)

  const [newQuery, setnewQuery] = useState('')

  const [question , setQuestion] = useState(query || '')

  const [loading, setLoading] = useState(true);
  const isSearchAble = useStore((s) => s.isSearchAble);
  const [data, setData] = useState("");

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const res = await fetch(
        // `http://localhost:8000/api/summarize-ai?query=${query}&searchid=${searchid}`
        `https://freelexity-backend.onrender.com/api/summarize-ai?query=${query}&searchid=${searchid}`
      );
      if (!res.ok) throw new Error("Failed to fetch");
      const result = await res.json();

      setData(result.data); // Markdown text
    } catch (error) {
      console.error(error.message);
      setData("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSearchAble) {
      handleSearch(query);
      setnewQuery('')
      setQuestion('')
    } else {
      setLoading(true);
      setData("");
    }
  }, [isSearchAble]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white border border-gray-200 shadow-lg rounded-xl">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid mb-3"></div>
        <p className="text-gray-600 text-lg font-medium">Thinking...</p>
      </div>
    );
  }

  return (
    <div className="h-[60dvh] pb-2 overflow-y-auto bg-white border border-gray-200 shadow-lg rounded-xl prose prose-sm md:prose-base max-w-none flex flex-col">
      <h1 className="p-3 mb-2 font-semibold text-xs md:text-sm text-right bg-[#00000012]">
        {question || query}
      </h1>
      <div className="h-[80%] p-3 overflow-y-scroll noScrollBar">
        {data ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
        ) : (
          <p className="text-gray-500 italic text-center">
            No response generated yet.
          </p>
        )}
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        handleSearch(newQuery)
        setQuestion(newQuery)
        setnewQuery('')
      }} className="border border-solid border-gray-3 w-[98%] mx-auto rounded-xl flex justify-center items-center overflow-clip mt-2">
        <input value={newQuery} onChange={(e)=>{setnewQuery(e.target.value)}} placeholder="Ask Related Query" type="text" className="flex-1 p-2 border-none outline-none"/>  
        <button className="p-3 px-6 bg-[#00000014] cursor-pointer font-semibold flex justify-center items-center">
          <span className="hidden md:block">
            Send
          </span>
          <BiSend size={'1.3rem'}/>
        </button>
      </form>

    </div>
  );
};

export default AIBody;

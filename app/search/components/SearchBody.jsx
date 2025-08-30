"use client";

import { useStore } from "@/app/contexts/searchStore";
import { useAiStore } from "@/app/contexts/useAi";
import { nanoid } from "nanoid";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";


const SearchBody = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const setDataForAi = useAiStore(s => s.setData)

  const setSearchable = useStore(s => s.setSearchAble)

  const setSearchId = useStore(s => s.setSearchId)

  const [ImagesToShow, setImagesToShow] = useState([])

  const navigate = useRouter()

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        try {
          setLoading(true);
          setSearchable(false)
          setData(null)
          setImagesToShow([])
          const searchid = nanoid()
          setSearchId(searchid)
          const res = await fetch(`https://freelexity-backend.onrender.com/api/search?query=${query}&searchid=${searchid}`);
          //const res = await fetch(`http://localhost:8000/api/search?query=${query}&searchid=${searchid}`);
          if (!res.ok) throw new Error("Failed to fetch");
          const result = await res.json();
          setData(result.data.data?.webPages?.value);
          // console.log(result.aiResponse);

          setDataForAi(result.aiResponse)
          setImagesToShow(result.images)
          setSearchable(true)
        } catch (err) {
          console.error(err);
          window.location.reload()
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [query]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid mb-4"></div>
        <p className="text-gray-600 text-lg">
          Fetching results for <span className="font-semibold">{query}</span>...
        </p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <p className="text-gray-500">
          No results found for <span className="font-semibold">{query}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 mx-auto max-w-5xl">


      <div className="flex justify-center items-center gap-6 flex-wrap">
        <h2 className="text-xs font-semibold md:text-sm text-blue-700">
          RECOURCES:
        </h2>
        {data.map((item, idx) => {
          const domain = new URL(item.url).hostname;
          const favicon = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;

          return (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center"
            >
              {/* Favicon bubble */}
              <div className="h-20 w-20 flex items-center justify-center rounded-2xl border border-gray-200 shadow-md bg-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <img
                  src={favicon}
                  alt={item.name}
                  className="h-10 w-10 rounded"
                />
              </div>

              {/* Tooltip with URL */}
              <span className="absolute z-30 bottom-[-2.5rem] opacity-0 group-hover:opacity-100 bg-black text-white text-xs px-3 py-1 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300">
                {domain}
              </span>
            </a>
          );
        })}
      </div>
      {
        ImagesToShow && ImagesToShow.length > 0 &&  (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Related Images</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {ImagesToShow.map((itm, idx) => (
                <div
                  onClick={()=>{
                    navigate.push(itm.imageFrom)
                  }}
                  key={idx}
                  className="overflow-hidden cursor-pointer rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
                >
                  <img
                    src={itm.src}
                    alt={itm?.alt || "Image"}
                    className="w-full h-48 object-contain  transition-transform duration-300"
                  />
                  {itm?.alt && (
                    <p className="p-2 text-sm text-gray-600 line-clamp-2">{itm.alt}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      }

    </div>
  );
};

export default SearchBody;

'use client'
import React from "react";

interface FileItem {
  images: {alt:string , src:string};
  videos: string[];
}

interface ShowImagesProps {
  Files: FileItem[];
}

const ShowImages: React.FC<ShowImagesProps> = ({ Files }) => {
  // Flatten all images and videos from the array
  const allImages = Files.flatMap(file => file.images);
  const allVideos = Files.flatMap(file => file.videos);

  return (
    <div className="max-w-[100vw] mx-auto p-4 space-y-8">
      {/* IMAGES */}
      {allImages.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Images</h3>
          <div className="flex gap-4 flex-wrap justify-center py-2">
            {allImages.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 md:w-64 md:h-36 w-32 h-24 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={img.src}
                  alt={`image-${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIDEOS */}
      {allVideos.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Videos</h3>
          <div className="flex gap-4 overflow-x-auto scrollbar-none py-2">
            {allVideos.map((video, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 h-36 rounded-lg overflow-hidden shadow-md"
              >
                <video
                  src={video}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowImages;

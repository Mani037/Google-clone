import Link from "next/link";
import React from "react";
import Pagination from "./Pagination";

const ImageSearchResult = ({ results }) => {
  return (
    <div className="sm:pb-24 pb-40 mt-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-3 space-x-4 mx-2">
        {results.items.map((result) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  className="h-60 group-hover:shadow-2xl w-full object-fill transition-shadow duration-300 rounded-md"
                ></img>
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl text-center">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="group-hover:underline truncate text-gray-600 text-center">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <Pagination />
      </div>
    </div>
  );
};

export default ImageSearchResult;

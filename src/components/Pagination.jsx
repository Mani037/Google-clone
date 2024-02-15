"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = () => {
  const path = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-evenly  space-x-4 sm:px-0 ">
      {startIndex >= 10 && (
        <Link
          href={`${path}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col items-center hover:underline">
            <BsChevronLeft className="h-5" />
            <p>previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${path}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col items-center hover:underline">
            <BsChevronRight className="h-5" />
            <p>next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Pagination;

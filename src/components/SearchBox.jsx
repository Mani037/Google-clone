"use client";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) {
      return;
    }
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full border border-gray-200 shadow-lg px-6 py-3 ml-10 mr-5 max-w-3xl flex-grow items-center rounded-full "
    >
      <input
        type="text"
        className="w-full outline-none"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      ></input>
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
        onClick={() => setTerm("")}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-3xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-2 " />
      <AiOutlineSearch
        className="hidden sm:inline-flex text-2xl text-blue-500 cursor-pointer  mr-3"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default SearchBox;

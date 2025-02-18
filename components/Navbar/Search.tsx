'use client';

import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-items-stretch">
        <div className="px-8 text-sm font-semibold">Anywhere</div>
        <div className="hidden sm:block font-semibold text-sm px-8 border-x-[1px] flex-1 text-center">
          Anytime
        </div>
        <div className="hidden sm:block font-semibold text-sm px-8 border-x-[1px]  justify-self-stretch text-center">
          Any price
        </div>
        <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600">
          <div className="hidden sm:block">Add guest</div>
          <div className="p-2 text-white rounded-full bg-rose-500">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React from 'react'
import Search from '../icons/search.svg'

const SearchBar = () => {
  return (
    <div className="flex items-center w-[30%] invisible">
        <div className="flex border border-[#1D1D1D] w-[100%] rounded-[10px] bg-[#F7EFE5] items-center">
            <img src={Search} alt="" className='mx-4'/> 
            <input
                type="text"
                className="block w-full px-4 py-2 text-[#1D1D1D] bg-[#F7EFE5] focus:outline-none rounded-[10px]"
                placeholder="Search for anything"
            />
        </div>
    </div>
  )
}

export default SearchBar
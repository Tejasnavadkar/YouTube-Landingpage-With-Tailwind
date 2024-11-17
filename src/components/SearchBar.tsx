import { Divide, Search,SearchX, X } from 'lucide-react';
import { useState } from 'react';

const SearchBar = () =>{
   const [search,setSearch] = useState(false)

    return <>
    <div className="w-96 max-sm:hidden block bg-zinc-900  flex rounded-full border border-current">
        <input type="text" className="bg-black rounded-l-full py-1 px-3 w-80 border-none outline-none  " />
        <button className='bg-zinc-900  rounded-r-full  px-6'><Search /></button>
    </div>
    <div className='inline-flex'>
    {search ? (<div className="w-96 sm:hidden bg-zinc-900  flex rounded-full border border-current ">
        <input type="text" className="bg-black rounded-l-full py-1 px-3 w-80 border-none outline-none  " />
        <button className='bg-zinc-900  rounded-r-full  px-6'><Search /></button>
    </div>):""}
    <button className='max-sm:block hidden px-2' onClick={()=>setSearch(!search)}>{ search ?  <X /> :<Search />}</button>
    </div>
    
    </>
}

export default SearchBar
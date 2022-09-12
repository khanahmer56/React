import React, { useContext } from 'react'
import { Abcontext } from './Context';


const Search = () => {
  const {query, serachpost}= useContext(Abcontext);
  return (
    <>
    <h1>Ahmer Khan website</h1>
    <form onSubmit={(e)=>{
      e.preventDefault();
    }}>
      <div>
        <input type="text" placeholder='Search..' value={query} onChange={(e)=> serachpost(e.target.value)}/>
      </div>
    </form>
    </>
  )
}

export default Search;
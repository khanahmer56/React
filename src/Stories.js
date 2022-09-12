import React,{useEffect} from 'react';
import { Abcontext } from './Context';
import { useContext } from 'react';

const Stories = () => {
    const { hits , nbPages,isloading,removepost}= useContext(Abcontext);
    if(isloading){
      return(<>
      <h1>Loading...</h1>
      </>)
    }
    
  return (
    <>
  <div className='stories-div'>
   {hits.map((cur)=>{
    return<> 
    <div className='card' key={cur.objectID}>
      <h2>{cur.title}</h2>
      <p>{cur.author} | <span> {cur.num_comments}</span></p>
      <div className='card-button'>
        <a href={cur.url}>Read more</a>
        <a href='#' onClick={() => removepost(cur.objectID)}> Remove</a>
      </div>

    </div>
  
    </>
   })}
     </div>
    </>
  )
}

export default Stories;
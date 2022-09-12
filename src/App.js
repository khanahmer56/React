import React from 'react'
import Pagination from './Pagination'
import Search from './Search'
import Stories from './Stories'
import { useContext } from 'react'
import {Abcontext} from './Context'
import "./app.css"


const App = () => {
 
  return (
    <>
    <div>
      <Search/>
      <Pagination/>
      <Stories/>
     
    </div>
    </>
  );
};
export default App;

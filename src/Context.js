import React,{ createContext, useReducer,useEffect } from "react";
import reducer from "./reducer";
const initialState = {
    isloading: true,
    query:"HTML",
    nbPages: 0,
    page: 0,
    hits:[],
};
const Abcontext = createContext();
const Appprovider =(props) =>{
  const  [state, dispatch]= useReducer(reducer, initialState);
    let api = "https://hn.algolia.com/api/v1/search?";
    const fetchapidata = async (url)=>{
        dispatch({type:"setload"});
     try {
    const res = await fetch(url);
    const data = await res.json();
   
    dispatch({type:"getstories",
    payload:{
        hits:data.hits,
        nbPages:data.nbPages,
    }
    
});
     } catch(error){
        console.log(error);
     }
    };
    const removepost = (id)=>{
        dispatch({
            type: "remove",
            payload: id

        });
    };
    const serachpost = (el)=>{
 dispatch({type: "search",
   payload:el});
    };
    useEffect(()=>{
        fetchapidata(`${api}query=${state.query}`);
       },[state.query]);
    return(
        <Abcontext.Provider value={{...state, removepost,serachpost}}>
            {props.children}
        </Abcontext.Provider>
    );

};
export {Abcontext, Appprovider };
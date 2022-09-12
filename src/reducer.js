const reducer = (state , action )=>{
   switch(action.type)
   {case "setload":
   return {
    ...state,
    isloading:true,
   }
    case "getstories":
        return {
            ...state,
            isloading:false,
            hits: action.payload.hits,
            nbpges: action.payload.nbpges,
        }
        case "remove":
            return{
                ...state,
                hits : state.hits.filter((cur)=>cur.objectID!==action.payload)
            }
        case "search":
            return{
                ...state,
                query:action.payload,
            }
    }
   }

   


export default reducer;
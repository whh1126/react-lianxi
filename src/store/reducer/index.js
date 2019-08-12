const defalutState={
    list:[],
    oneList:[]
}
 const reducer=(state=defalutState,action)=>{
     let newState=state
     switch(action.type){
         case 'INIT':
                console.log(action.value)
             newState={
                 ...state,
                 list:[...newState.list,...action.value]
             }
             
             break;
        case "ONE":
            newState={
                ...state,
                oneList:action.value
            }
            //console.log(newState.oneList)
            break;
        default:
            break;
     }
     return newState
 }
 export default reducer
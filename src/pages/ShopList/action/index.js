 import axios from 'axios'
 const getDate=(value)=>(
     {
         type:"INIT",
         value
     }
 )
 export const initAction=(page)=>dispatch=>
 axios.post("/api/getList",{page}).then(({data})=>{
     //console.log(data)
     dispatch(getDate(data))
 })
 export const oneAction=(data)=>(
     {
       type:"ONE",  
       value:data
     }
     
 )
import React from 'react'


 export const List =({data})=>{


     return <div>
         <ul>

         {data.map(item=>{
             return(
                     <li key={item}><a href={item}>{item}</a></li>
             )
         })}
         </ul>

     </div>

}
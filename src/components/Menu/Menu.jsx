import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Menu({visibility}) {

   //check if the menu is opened based on visibility property
   
   useEffect(() => {
   const  status  = visibility;
   console.log(status);
       
   }, [visibility])
   
   

  return (
    <div className={`bg-cyan-800 absolute py-10 translate-y-3/4 translate-x-2 rounded-md ${(!visibility) ? "hidden" : "block"}`}>
        
        <ul className='p-4 px-9 flex flex-col gap-4' >
             <li><a href='/admin'>Admin</a></li>
             <li><a href='/admin/finance'>Financeiro</a></li>
             <li><a href='/admin/category'>Categorias</a></li>
             <li><a href='/admin/agenda'>Agenda Cultural</a></li>
             <li><a href='/admin' aria-disabled>Comming Soon</a></li>
        </ul>

    </div>
  )
}

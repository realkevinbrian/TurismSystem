import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MoneySharp } from '@material-ui/icons';
import { PieChartOutlineSharp } from '@mui/icons-material';
import { faPieChart, faMoneyBillWheat,faCashRegister, faRegistered, faStoreAlt } from '@fortawesome/free-solid-svg-icons';



export default function Menu({visibility}) {


  /***
   * DADOS PARA LINKS (CATEGORIAS)
   */
  const [data, setData] = useState([
    {id:1, label : "Indicadores", link : "/admin", icon : <FontAwesomeIcon className="text-6xl" icon={faPieChart}/>},
    {id:2, label : "Financeiro", link : "/admin/finance", icon : <FontAwesomeIcon className="text-6xl" icon={faCashRegister}/>},
    {id:3, label : "Categorias", link : "/admin/category", icon : <FontAwesomeIcon className="text-6xl" icon={faStoreAlt}/>},
    {id:4, label : "Agenda Cultural", link : "/admin/agenda", icon : <FontAwesomeIcon className="text-6xl" icon={faRegistered}/>}
  ]);

   /****
    * check if the menu is opened based on visibility property
    */
   const  status  = visibility;

  return (

    <div className={`bg-cyan-800 absolute py-6 translate-y-16 translate-x-0 rounded-md ${(!visibility) ? "hidden" : "block"}`}>
        <ul className='px-9 flex flex-col gap-4' >
             {
               data.map((item)=>(
                 <li key={item.id} className="grid grid-cols-1 justify-center justify-items-center p-4 gap-2">
                   
                   <a href={item.link} className="grid grid-cols-1 justify-center justify-items-center">
                   {item.icon}
                   {item.label}
                   </a>
                   </li>
               ))
             }
        </ul>
    </div>

  )
}

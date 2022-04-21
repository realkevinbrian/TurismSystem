/***
 * 
 * ESTE COMPONENTE SERVE PARA MONSTRAR O RELATORIO DE INDICADORES NO ADMIN
 * 
 * 
 */


import { faBinoculars, faFlag, faMapLocation, faShop, faSignature, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';




export default function Card() {
/***
 * 
 * Here I initialized card state to Hold Cards Data 
 * As we don't have an API for that
 */
const [card] = useState([
    {
        id: 1,
        title : `Usuarios`,
        icon : faUserAlt,
        value : 1022
    },
    {
        id: 2,
        title : `Guias Turísticos`,
        icon : faFlag,
        value : 1022
    },    
    {
        id: 3,
        title : `Estabelecimentos`,
        icon : faShop,
        value : 1001
    },
    {
        id: 4,
        title : `Roteiros`,
        icon : faMapLocation,
        value : 300
    },
    {
        id: 5,
        title : `Pontos Turísticos`,
        icon : faBinoculars,
        value : 300
    },
    {
        id: 6,
        title : `Assinaturas`,
        icon : faSignature,
        value : `1000`
    },
    {
        id: 7,
        title : `Assinaturas(R$) (Mes Total)`,
        icon : faSignature,
        value : `R$ ${121.324}`

    },
    {
        id: 8,
        title : `Assinaturas (R$) (total)`,
        icon : faSignature,
        value : `R$ ${121.324}`
    }
]);

  return (
      
    <div className='Container grid grid-cols-5 gap-4 md:grid-cols-1 sm:px-6'>
        {
            card.map(item=>(
                <div className="card bg-white grid grid-cols-1 justify-center justify-items-center shadow-md rounded-md gap-8 p-4 hover:scale-110 hover:border hover:border-cyan-800 transition-all" key={item.id}>
                    <h1 className='text-lg font-medium text-center '>{item.title}</h1>
                    <FontAwesomeIcon icon={item.icon} className="text-6xl text-cyan-800"/>
                    <h2>{item.value}</h2>
                </div>
            ))
        }
    </div>
  )
}

import React from 'react'
import {Link} from "react-router-dom"

function index({title,goto}) {
  return (
    <>
        <button className="bg-cyan-800 px-12 py-4 rounded-full text-white font-bold hover:bg-cyan-700">
            <a href={goto} className="bg-cyan-800 px-12 py-4 rounded-full text-white font-bold hover:bg-cyan-700">
                {title}
            </a>
        </button>
    </>
  )
}

export default index
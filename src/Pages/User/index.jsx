import React from 'react'
import { Link } from 'react-router-dom'

function index() {
  return (
    <div>
        <h1 style={{textAlign : "center"}}>You are in User</h1>
        <Link to="admin/login" style={{textAlign : "center"}}>Login</Link>
        <Link to="user/login" style={{textAlign : "center"}}>Login</Link>
    </div>
  )
}

export default index
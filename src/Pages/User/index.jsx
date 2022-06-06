import React from 'react'
import { Link } from 'react-router-dom'

function index() {
  return (
    <div>
        <h1 style={{textAlign : "center"}}>You are in User</h1>
        <Link to="admin/login to Admin" style={{textAlign : "center"}}>Login</Link>
        <Link to="#" style={{textAlign : "center"}} disabled>Login to User (Under Developerment)</Link>
    </div>
  )
}

export default index
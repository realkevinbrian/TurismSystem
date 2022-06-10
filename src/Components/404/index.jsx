/*****
 * 404 Error Page Component 
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { ErrorPageWrapper } from './styled'
import officialLogo from "../../Assets/Images/logo02.webp"

function index() {
  return (
    <ErrorPageWrapper>
        <div>
            <img src={officialLogo} alt="officialLogo" />
            <Link to="/admin">Go back to Admin</Link>
        </div>
    </ErrorPageWrapper>
  )
}

export default index
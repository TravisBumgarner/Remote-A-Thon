import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/getinvolved">Get Involved</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/questions">Questions</Link></li>
        </ul>
    </div>
}

export default Navigation
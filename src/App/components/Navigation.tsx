import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.ul`
    display: flex;
`

const MenuItem = styled.li`
    margin: 0 1em;
`

const Navigation = () => {
    return <div>
        <Menu>
            <MenuItem><Link to="/">Home</Link></MenuItem>
            <MenuItem><Link to="/getinvolved">Get Involved</Link></MenuItem>
            <MenuItem><Link to="/contact">Contact</Link></MenuItem>
            <MenuItem><Link to="/questions">FAQ</Link></MenuItem>
        </Menu>
    </div>
}

export default Navigation
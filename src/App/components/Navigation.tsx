import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { HOVER_COLOR } from 'theme'

const Menu = styled.ul`
    display: flex;
    margin: 0.5em 0;
`

const MenuItem = styled.li`
    margin: 0 1em;
    display: block;
`

const activeStyle = {
    fontWeight: 700,
    textTransform: 'uppercase',
    color: HOVER_COLOR
}

const Navigation = () => {
    return <div>
        <Menu>
            <MenuItem><NavLink exact activeStyle={activeStyle} to="/">Home</NavLink></MenuItem>
            <MenuItem><NavLink activeStyle={activeStyle} to="/participate">Participate</NavLink></MenuItem>
            <MenuItem><NavLink activeStyle={activeStyle} to="/problem">Submit a Problem</NavLink></MenuItem>
            <MenuItem><NavLink activeStyle={activeStyle} to="/sponsor">Sponsor</NavLink></MenuItem>
            <MenuItem><NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink></MenuItem>
            <MenuItem><NavLink activeStyle={activeStyle} to="/questions">FAQ</NavLink></MenuItem>
            <MenuItem><NavLink activeStyle={activeStyle} to="/about">About</NavLink></MenuItem>
        </Menu>
    </div>
}

export default Navigation
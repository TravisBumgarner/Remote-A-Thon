import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaSlack, FaTwitter, FaSlackHash, FaTwitterSquare } from 'react-icons/fa'


const Menu = styled.ul`
    display: flex;
    margin: 0.5em 0;
    padding: 0;
`

const MenuItem = styled.li`
    margin: 0 1em;
    display: block;
`

const activeStyle = {
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'var(--hover-color)'
}

const Navigation = () => {
    return <div>
        <Menu>
            <MenuItem><NavLink exact activeStyle={activeStyle} to="/">Home</NavLink></MenuItem>
            <MenuItem><NavLink activeStyle={activeStyle} to="/participate">Participate</NavLink></MenuItem>
            <MenuItem><NavLink activeStyle={activeStyle} to="/problem">Submit a Problem</NavLink></MenuItem>
            <MenuItem><NavLink activeStyle={activeStyle} to="/sponsor">Sponsor</NavLink></MenuItem>
            <MenuItem><NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink></MenuItem>
            {/* <MenuItem><NavLink activeStyle={activeStyle} to="/questions">FAQ</NavLink></MenuItem> */}
            <MenuItem><a target="_blank" href="https://join.slack.com/t/lets-pair-online/shared_invite/zt-cmfomldv-F6mtvfedSVtYwlKusjIRaw"><FaSlack />Slack</a></MenuItem>
            <MenuItem><a target="_blank" href="https://twitter.com/travis_the_makr"><FaTwitter />Twitter</a></MenuItem>

        </Menu>
    </div>
}

export default Navigation
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaSlack, FaTwitter, FaBars } from 'react-icons/fa'

import { Header } from 'shared'

const MenuWrapper = styled.div`
`

const MenuSection = styled.div``

const Menu = styled.ul`
    margin: 0.5em 0;
    padding: 0;
`

const MenuItem = styled.li`
    margin: 0.5em 1em;
    display: block;
`

const activeStyle = {
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'var(--hover-color)'
}

const Navigation = () => {
    return <MenuWrapper>
        <MenuSection>
            <Header size="small">
                General Information
                </Header>
            <Menu>
                <MenuItem><NavLink exact activeStyle={activeStyle} to="/">Home</NavLink></MenuItem>
                <MenuItem><NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink></MenuItem>
                <MenuItem><NavLink activeStyle={activeStyle} to="/about">About</NavLink></MenuItem>
                <MenuItem><NavLink activeStyle={activeStyle} to="/questions">FAQ</NavLink></MenuItem>
            </Menu>
        </MenuSection>

        <MenuSection>
            <Header size="small">
                Get Involved
                </Header>
            <Menu>
                <MenuItem><a target="_blank" href="https://join.slack.com/t/lets-pair-online/shared_invite/zt-cmfomldv-F6mtvfedSVtYwlKusjIRaw">Join us On Slack <FaSlack /></a></MenuItem>
                <MenuItem><NavLink activeStyle={activeStyle} to="/participate">Participate</NavLink></MenuItem>
                <MenuItem><NavLink activeStyle={activeStyle} to="/problem">Submit a Problem</NavLink></MenuItem>
                <MenuItem><NavLink activeStyle={activeStyle} to="/sponsor">Sponsor</NavLink></MenuItem>
                <MenuItem><a target="_blank" href="https://www.gofundme.com/f/let039s-pair-online">Donate</a></MenuItem>
            </Menu>
        </MenuSection>

        <MenuSection>
            <Header size="small">
                Participant Info
                </Header>
            <Menu>
                <MenuItem><NavLink activeStyle={activeStyle} to="/schedule">Tentative Schedule</NavLink></MenuItem>
            </Menu>
        </MenuSection>

    </MenuWrapper >
}

export default Navigation
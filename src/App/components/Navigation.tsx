import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaSlack, FaTwitter, FaBars } from 'react-icons/fa'

const MOBILE_WIDTH = 1000

function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }

    const [windowSize, setWindowSize] = React.useState(getSize);

    React.useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}

const Menu = styled.ul`
    display: flex;
    margin: 0.5em 0;
    padding: 0;
    
    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        flex-direction: column;
    }

`

const MenuItem = styled.li`
    margin: 0 1em;
    display: block;

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        margin: 0.5em 0;
    }
`

const activeStyle = {
    fontWeight: 700,
    textTransform: 'uppercase',
    color: 'var(--hover-color)'
}

const MenuToggle = styled(FaBars)`
    position: absolute;
    top 0.5em;
    left: 0.5em;
    font-size: 2em;

    @media only screen and (min-width: ${MOBILE_WIDTH}px) {
        display: none;
    }

    &:hover {
        cursor: pointer;
    }
`

const SIDE_BAR_WIDTH = 14

const MobileMenuWrapper = styled.div`
    display: none;

    @media only screen and (max-width: ${MOBILE_WIDTH}px) {
        position: absolute;
        left: 0;
        top: 0;
        display: list-item;
        background-color: white;
        border-right: 5px solid var(--hover-color);
        height: 100vh;
        margin: 0em;
        padding: 1em;
        display: flex;
        width: ${SIDE_BAR_WIDTH}em;
        box-sizing: border-box;
    }
`

const MobileMenuClose = styled.div`
    width: calc(100vw - ${SIDE_BAR_WIDTH}em);
    height: 100vh;
    position: absolute;
    left: ${SIDE_BAR_WIDTH}em;
    top: 0;
`


const Navigation = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const size = useWindowSize();
    console.log(size)
    const isMobile = size.width < MOBILE_WIDTH

    const MenuItems = <Menu onClick={() => setIsOpen(false)}>
        <MenuItem><NavLink exact activeStyle={activeStyle} to="/">Home</NavLink></MenuItem>
        <MenuItem><NavLink activeStyle={activeStyle} to="/participate">Participate</NavLink></MenuItem>
        <MenuItem><a target="_blank" href="https://join.slack.com/t/lets-pair-online/shared_invite/zt-cmfomldv-F6mtvfedSVtYwlKusjIRaw"><FaSlack /> Join us On Slack</a></MenuItem>
        <MenuItem><NavLink activeStyle={activeStyle} to="/problem">Submit a Problem</NavLink></MenuItem>
        <MenuItem><NavLink activeStyle={activeStyle} to="/sponsor">Sponsor</NavLink></MenuItem>
        <MenuItem><a target="_blank" href="https://www.gofundme.com/f/let039s-pair-online">Donate</a></MenuItem>
        <MenuItem><NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink></MenuItem>
        <MenuItem><NavLink activeStyle={activeStyle} to="/about">About</NavLink></MenuItem>
        <MenuItem><NavLink activeStyle={activeStyle} to="/questions">FAQ</NavLink></MenuItem>
    </Menu>
    return <div>
        <MenuToggle onClick={() => setIsOpen(!isOpen)} />
        {
            isMobile
                ? (
                    isOpen
                        ? <>
                            <MobileMenuWrapper>{MenuItems}</MobileMenuWrapper>
                            <MobileMenuClose onClick={() => setIsOpen(false)} />
                        </>
                        : ''
                )
                : MenuItems
        }
    </div >
}

export default Navigation
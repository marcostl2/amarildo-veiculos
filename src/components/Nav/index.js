import React, { useState, useEffect } from 'react'

import car from '../../images/fiat-mobi.png'
import { Menu } from '@material-ui/icons'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './styles.scss'

export default function Nav({ mobileScreen }) {

    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        setMobileMenu(false)
    }, [mobileScreen])

    window.onscroll = function () { handleNavOpacity() };

    function handleNavOpacity() {
        if (window.pageYOffset > 0) {
            document.querySelector('.nav-container').style.opacity = '0.6'
        } else {
            document.querySelector('.nav-container').style.opacity = '1'
        }
    }

    function toggleDrawer(event) {
        if (!mobileScreen) {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
        }
        setMobileMenu((mobileMenu) => !mobileMenu);
    };

    function MobileMenu() {
        return (
            <div className="drawer-wrapper" role="presentation" style={{ width: 180, zIndex: 8000 }}>
                <List className="drawer">
                    {['HOME', 'GALERIA', 'CONTATO'].map((text) => (
                        <ListItem button key={text}>
                            <Link style={{ textDecoration: 'none' }} href={`#${text.toLowerCase()}`}>
                                <ListItemText primary={text} style={{ color: '#21262c' }} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }

    return (
        <nav className="nav-container">
            <div className="website-logo">
                <img src={car} alt="Car" />
                <span>Amarildo Veículos</span>
            </div>
            {mobileScreen ?
                <ul>
                    <li id="hamburguer-menu">
                        <Menu
                            onClick={(e) => toggleDrawer(e)}
                            style={{ color: "whitesmoke", width: 50 }}

                            size={0}
                        />
                        <SwipeableDrawer
                            open={mobileMenu}
                            anchor="right"
                            onClose={(e) => toggleDrawer(e)}
                            onOpen={(e) => toggleDrawer(e)}
                            style={{ zIndex: 8000 }}
                        >
                            <MobileMenu />
                        </SwipeableDrawer>
                    </li>
                </ul>
                :
                <ul>

                    <li>
                        <a href="#home">HOME</a >
                    </li >
                    <li>
                        <a href="#galeria">GALERIA</a>
                    </li>
                    <li>
                        <a href="#contato">CONTATO</a>
                    </li>
                </ul >
            }
        </nav>
    )
}
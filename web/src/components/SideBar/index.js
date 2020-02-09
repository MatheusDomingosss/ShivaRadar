import React, { Component } from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faHome, faChartBar, faIdCard, faBook } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import './styles.css';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


class Sidebar extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <SideNav>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="dashboard">
                    {/* Logo */}
                    <NavItem>
                        <NavIcon>
                            <img
                                align="center"
                                width={50}
                                src={require('../../image/logo_transparente.png')} />
                        </NavIcon>
                    </NavItem>

                    {/* Dashboard */}

                    <NavItem eventKey="dashboard" class="">
                        <NavIcon>
                            <Link to="/" class="nounderline">
                                <FontAwesomeIcon icon={faChartBar} color="white" size="lg" align="center"/>
                            </Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/" class="nounderline">Dashboard</Link>
                        </NavText>
                    </NavItem>

                    {/* Contato */}

                    <NavItem eventKey="contato">
                        <NavIcon>
                            <Link to="/contato" class="nounderline">
                                <FontAwesomeIcon icon={faIdCard} color="white" size="lg" align="center"/>
                            </Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/contato" class="nounderline">Contato</Link>
                        </NavText>
                    </NavItem>
                    {/* Historico */}

                    <NavItem eventKey="historico">
                        <NavIcon>
                            <Link to="/historico" class="nounderline">
                                <FontAwesomeIcon icon={faBook} color="white" size="lg" align="center"/>
                            </Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/historico" class="nounderline">Historico</Link>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        );
    }
}

export default Sidebar;
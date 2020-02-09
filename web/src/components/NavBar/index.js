import React, { Component } from 'react';

// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faEdit, faHome, faChartBar, faIdCard, faBook } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';

import './styles.css';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


class Navbar extends Component {
    
    render() {
        return (
            <nav class="navbar navbar-expand-sm navbar-light bg-roxo ">
                <a class="navbar-brand" href="#">
                    <img
                        align="center"
                        width={100}
                        src={require('../../image/logo_transparente.png')} />
                </a>

                <button class="navbar-toggler" data-toggle="collapse" data-target="">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="nav-principal">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="/" class="navbar-brand ">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a href="/contato" class="navbar-brand">Contato</a>
                        </li>
                        <li class="nav-item">
                            <a href="/historico" class="navbar-brand">Historico</a>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
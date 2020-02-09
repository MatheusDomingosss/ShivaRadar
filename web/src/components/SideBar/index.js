import React from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function Sidebar({ dev }) {
    return (
        <SideNav
            onSelect={(selected) => {
                // const to = '/' + selected;
                // if (location.pathname !== to) {
                //     history.push(to);
                // }
            }}>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                {/* Logo */}
                <NavItem>

                </NavItem>
                {/* home */}
                <NavItem eventKey="home">
                    <NavIcon>
                        {/* <FontAwesomeIcon icon={['fab', 'home']} />
                        <i class="fas fa-home" style={{ fontSize: '1.75em' }} /> */}
                    </NavIcon>
                    <NavText>
                    <a href="#" class="nounderline">Profile</a>
                     </NavText>
                </NavItem>
                {/* Dashboard */}
                <NavItem eventKey="dashboard" class="">
                    <NavIcon>
                        <i class="fas fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        <a href="#" class="nounderline">Dashboard</a>
                     </NavText>
                </NavItem>


                <NavItem eventKey="charts">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Charts
                     </NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            Line Chart
                         </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Bar Chart
                         </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default Sidebar;
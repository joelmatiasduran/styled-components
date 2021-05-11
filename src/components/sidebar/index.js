import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,
SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {

    const sendMeAMailToo = () => {
        window.location.href = "mailto:jmatiimartinez@gmail.com";
    }

    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                     to="about"
                     onClick={toggle}
                     smooth="true"
                     duration={500}
                     spy="true" 
                     exact="true"
                     offset={-80}>
                        About
                    </SidebarLink>
                    <SidebarLink
                     to="projects" 
                     onClick={toggle}
                     smooth="true"
                     duration={500}
                     spy="true" 
                     exact="true"
                     offset={-80}>
                        Projects
                    </SidebarLink>
                    <SidebarLink
                     to="services" 
                     onClick={toggle}
                     smooth="true"
                     duration={500}
                     spy="true" 
                     exact="true"
                     offset={-80}>
                        Services
                    </SidebarLink>
                    <SidebarLink
                     to="contact" 
                     onClick={toggle}
                     smooth="true"
                     duration={500}
                     spy="true" 
                     exact="true"
                     offset={-80}>
                        E-mail Me
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute
                     onClick={sendMeAMailToo}>
                        Contact Me
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;

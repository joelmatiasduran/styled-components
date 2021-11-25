import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const sendMeAMail = () => {
    window.location.href = "mailto:jmatiimartinez@gmail.com";
  };

  return (
    <>
      <IconContext.Provider value={{ color: "fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome} scrollNav={scrollNav}>
              Joel
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="projects"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                  scrollNav={scrollNav}
                >
                  Contact Me
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                onClick={sendMeAMail}
                smooth="true"
                duration={500}
                spy="true"
                exact="true"
                offset={-80}
              >
                Contact
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

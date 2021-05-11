import React from 'react';
import {animateScroll as Scroll} from 'react-scroll';
import {/* FaFacebook, FaInstagram, FaYoutube ,FaTwitter*/ FaLinkedin} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, 
    WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';


const Footer = () => {
    
    const toggleHome = () => {
        Scroll.scrollToTop();
    }

    const goToMyLinkedIn = () => {
        window.open('https://www.linkedin.com/in/joel-martinez-01010/', '_blank')
    }
    
    const goToReactWebsite = () => {
        window.open('https://reactjs.org/', '_blank')
    }
    const goToJavaScriptWebsite = () => {
        window.open('https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics', '_blank')
    }
    const goToMyGitHub = () => {
        window.open('https://github.com/joelmatiasduran', '_blank')
    }
    const goToExpoWebsite = () => {
        window.open('https://expo.io/', '_blank')
    }
    const goToCodeInPlace = () => {
        window.open('https://codeinplace.stanford.edu/', '_blank')
    }
    const goToUdemy = () => {
        window.open('https://www.udemy.com/course/the-complete-react-native-and-redux-course/', '_blank')
    }
    const goToZeroToMastery = () => {
        window.open('https://zerotomastery.io/', '_blank')
    }
    const goToCodeCademy = () => {
        window.open('https://www.codecademy.com/', '_blank')
    }
    const goToStyledComponents = () => {
        window.open('https://styled-components.com/', '_blank')
    }
    const goToReactScroll = () => {
        window.open('https://www.npmjs.com/package/react-scroll', '_blank')
    }
    const goToFigma = () => {
        window.open('https://www.figma.com/', '_blank')
    }
    const goToMyCssTricks = () => {
        window.open('https://css-tricks.com/', '_blank')
    }
    const goToMozillaDev = () => {
        window.open('https://developer.mozilla.org/es/', '_blank')
    }

    const sendMailNow = () => {
        window.location.href = "mailto:jmatiimartinez@gmail.com"
    }
    

    return (
        <>
          <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>

                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            <FooterLinkTitle>About Me </FooterLinkTitle>
                                <FooterLink onClick={sendMailNow}>Contact Me</FooterLink>
                                <FooterLink onClick={goToMyLinkedIn}>LinkedIn</FooterLink>                       
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Developer Toolbox</FooterLinkTitle>
                                <FooterLink onClick={goToStyledComponents}>Styled Components</FooterLink>
                                <FooterLink onClick={goToReactScroll}>React Scroll</FooterLink>
                                <FooterLink onClick={goToFigma}>User Interface</FooterLink>
                                <FooterLink onClick={goToMyCssTricks}>CSS Tricks</FooterLink>
                                <FooterLink onClick={goToMozillaDev}>Mozilla Dev</FooterLink>                       
                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>

                        <FooterLinkItems>
                            <FooterLinkTitle>Programming</FooterLinkTitle>
                                <FooterLink onClick={goToReactWebsite}>React Js</FooterLink>
                                <FooterLink onClick={goToJavaScriptWebsite}>JavaScript</FooterLink>
                                <FooterLink onClick={goToMyGitHub}>Git/Github</FooterLink>
                                <FooterLink onClick={goToExpoWebsite}>Expo</FooterLink>                       
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Education</FooterLinkTitle>
                                <FooterLink onClick={goToCodeInPlace}>Stanford Code In Place</FooterLink>
                                <FooterLink onClick={goToZeroToMastery} >Zero to Mastery</FooterLink>
                                <FooterLink onClick={goToCodeCademy}>Codecademy</FooterLink>
                                <FooterLink onClick={goToUdemy}>React Courses</FooterLink>                     
                        </FooterLinkItems>
                        
                    </FooterLinksWrapper>
                </FooterLinksContainer>    
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Joel
                        </SocialLogo>
                        <WebsiteRights>Joel © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>                            
                           <SocialIconLink onClick={goToMyLinkedIn} target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>    
          </FooterContainer>  
        </>
    )
};

export default Footer;

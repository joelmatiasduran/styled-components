import React, {useState} from 'react';
import Video from '../../video/video.mp4';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement';


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay playsInline loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi! I'm Joel Matias </HeroH1>
                <HeroP>Front End Developer</HeroP>
                <HeroBtnWrapper>
                    <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true' dark='true'
                     /*React Scroll*/
                     smooth="true"
                     duration={500}
                     spy="true" 
                     exact="true"
                     offset={-80}
                    >
                        Get Started {hover? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

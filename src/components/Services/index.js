import React from 'react'
import {ServicesContainer, ServicesH1,ServicesWrapper, 
ServicesCard, ServicesH2, ServicesP} from './ServicesElements';
import BitcoinLottie from '../Lottie/bitcoin'
import Ecommerce from '../Lottie/ecommerce';
import Pikachu from '../Lottie/pikachu';

const Services = () => {
    return (
        <>
          <ServicesContainer id="projects">
            <ServicesH1>Projects I've made</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>
                 
                    <a href="https://to-do-list-joel.herokuapp.com/" style={{color: 'inherit', textDecoration: 'none', textAlign: 'center'}} target='_blank' rel="noreferrer" > 
                    <Ecommerce/>
                      <ServicesH2>E-Commerce</ServicesH2>
                      <ServicesP>Next js, Mongo DB, Express, Node Js & Styled Components </ServicesP>
                    </a>
                </ServicesCard>

                <ServicesCard>
                   
                      <Pikachu/>
                      <ServicesH2>Poke Dex</ServicesH2>
                      <ServicesP>Next Js, Authentication, TypeScript, Tailwind CSS, Axios & React Hooks </ServicesP>
                      <ServicesH2>Code</ServicesH2>
                      <a href="https://next-api-pokemon.vercel.app/" style={{color: 'inherit', textDecoration: 'none', textAlign: 'center'}} target='_blank rel="noreferrer'>
                      <ServicesH2>Demo</ServicesH2>
                      </a>
                  
                </ServicesCard>

                <ServicesCard>
                    <a href="https://www.swympools.org/" style={{color: 'inherit', textDecoration: 'none', textAlign: 'center'}}> 
                    <BitcoinLottie/>
                      <ServicesH2>Swym Pools</ServicesH2>
                      <ServicesP>React Js, Responsive Design, Styled Components</ServicesP>
                      
                    </a>
                </ServicesCard>

            </ServicesWrapper>
          </ServicesContainer>  
        </>
    )
}

export default Services;

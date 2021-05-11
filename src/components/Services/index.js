import React from 'react'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-7.svg';
import Icon3 from '../../images/svg-3.svg';
import {ServicesContainer, ServicesH1,ServicesWrapper, 
ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <>
          <ServicesContainer id="projects">
            <ServicesH1>Projects I've made</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>
                    <a href="https://to-do-list-joel.herokuapp.com/" style={{color: 'inherit', textDecoration: 'none', textAlign: 'center'}} target='_blank' > 
                      <ServicesIcon src={Icon1}/>
                      <ServicesH2>To-Do List</ServicesH2>
                      <ServicesP>React Js, CSS, JavaScript</ServicesP>
                    </a>
                </ServicesCard>

                <ServicesCard>
                    <a href="https://cryptopricesapi.netlify.app/" style={{color: 'inherit', textDecoration: 'none', textAlign: 'center'}} target='_blank' > 
                      <ServicesIcon src={Icon2}/>
                      <ServicesH2>Crypto-Prices</ServicesH2>
                      <ServicesP>React Js, API, JavaScript</ServicesP>
                    </a>
                </ServicesCard>

                <ServicesCard>
                    <a href="https://joelmatias.netlify.app/" style={{color: 'inherit', textDecoration: 'none', textAlign: 'center'}}> 
                      <ServicesIcon src={Icon3}/>
                      <ServicesH2>This Website</ServicesH2>
                      <ServicesP>React Js, Responsive Design</ServicesP>
                    </a>
                </ServicesCard>

            </ServicesWrapper>
          </ServicesContainer>  
        </>
    )
}

export default Services;

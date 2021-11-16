import React from 'react'
import {ServicesContainer, ServicesH1,ServicesWrapper, 
ServicesCard, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <>
          <ServicesContainer id="projects">
            <ServicesH1>Projects I've made</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>
                 
                    <a href="https://to-do-list-joel.herokuapp.com/" style={{color: 'inherit', textDecoration: 'none', textAlign: 'center'}} target='_blank' rel="noreferrer" > 
                    <p>Future Lottie</p>
                      <ServicesH2>Task Management</ServicesH2>
                      <ServicesP>Next Js, PostgreSQL, Nest Js, Node Js & Tailwind CSS </ServicesP>
                    </a>
                </ServicesCard>

                <ServicesCard>
                   
                      <p>Future Lottie</p>
                      <ServicesH2>Poke Dex</ServicesH2>
                      <ServicesP>Next Js, Authentication, TypeSCript, Tailwind CSS, Axios & React Hooks </ServicesP>
                      <ServicesH2>Code</ServicesH2>
                      <a href="https://next-api-pokemon.vercel.app/" style={{color: 'inherit', textDecoration: 'none', textAlign: 'center'}} target='_blank rel="noreferrer'>
                      <ServicesH2>Demo</ServicesH2>
                      </a>
                  
                </ServicesCard>

                <ServicesCard>
                    <a href="https://www.swympools.org/" style={{color: 'inherit', textDecoration: 'none', textAlign: 'center'}}> 
                    <p>Future Lottie</p>
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

import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: 800px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    /* color: black; */
    @media screen and (max-width: 768px) {
        height: 2350px;
    }

    @media screen and (max-width: 480px) {
        height: 2350px;  
    }
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 68px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    } 

`;

export const ServicesCard = styled.div`
    border: 0.2rem solid yellow;
  border-radius: 2rem;
  padding: 0.4em;
  box-shadow: 0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem #bc13fe,
              0 0 0.8rem #bc13fe,
              0 0 2.8rem #bc13fe,
              inset 0 0 1.3rem #bc13fe;
             
    background: black;
    color:yellow;
    fill: yellow;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 380px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        background:black;
        transform: scale(1.15);
        transition: all 0.2s ease-in-out;
    }  
    
    @media screen and (max-width: 768px) {
        max-height: 580px;
    }

    @media screen and (max-width: 480px) {
        max-height: 580px; 
    } 

    
`;

export const InfoContainer = styled.div`
    padding: 1rem 0;
    height: 160px;
    width: 160px;
    margin: 10px 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    color: yellow;
    transform: scale(1.55);
    text-align: center;
    
    &:hover{       
        transform: scale(2.5);
        transition: all 0.2s ease-in-out;
    }
    &:active{
        color:yellow;
        transform: scale(3.5);
        transition: all 0.2s ease-in-out;
    }
`;


export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 64px;
    

    @media screen and (max-width: 400px) {
        font-size: 2rem;
    }
`;
export const ServicesH2 = styled.h2`
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    transition: all 0.2s ease-in-out;
    color: white;
    
    &hover{
        transition: all 0.2s ease-in-out;
        color:yellow;
    }
`;
import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP,
  InfoContainer,
} from "./ServicesElements";
import { FaGithub } from "react-icons/fa";
import BitcoinLottie from "../Lottie/bitcoin";
import Ecommerce from "../Lottie/ecommerce";
import Pikachu from "../Lottie/pikachu";

const Services = () => {
  return (
    <>
      <ServicesContainer id="projects">
        <ServicesH1>Projects I've made</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <a
              href="comingsooon.dev"
              style={{
                color: "inherit",
                textDecoration: "none",
                textAlign: "center",
              }}
              target="_blank"
              rel="noreferrer"
            >
              <Ecommerce />
              <ServicesH2>E-Commerce</ServicesH2>
              <ServicesP>
                Next js, Mongo DB, Express, Node Js & Styled Components{" "}
              </ServicesP>
            </a>
            <InfoContainer>
              <a
                href="https://github.com/joelmatiasduran/to-do-app-nov"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                <FaGithub />
              </a>
            </InfoContainer>
          </ServicesCard>

          <ServicesCard>
            <a
              href="https://next-api-pokemon.vercel.app/"
              style={{
                color: "inherit",
                textDecoration: "none",
                textAlign: "center",
              }}
              target="_blank"
              rel="noreferrer"
            >
              <Pikachu />
              <ServicesH2>Poke Dex</ServicesH2>
              <ServicesP>
                Next Js, Authentication, TypeScript, Tailwind CSS, Axios & React
                Hooks{" "}
              </ServicesP>
            </a>

            <InfoContainer>
              <a
                href="https://github.com/joelmatiasduran/next-api-pokemon"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                <FaGithub />
              </a>
            </InfoContainer>
          </ServicesCard>

          <ServicesCard>
            <a
              href="https://www.swympools.org/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "inherit",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              <BitcoinLottie />
              <ServicesH2>Swym Pools</ServicesH2>
              <ServicesP>
                React Js, Responsive Design, Styled Components
              </ServicesP>
            </a>
            <InfoContainer>
              <a
                href="https://github.com/Swym-Pools/Swym"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                <FaGithub />
              </a>
            </InfoContainer>
          </ServicesCard>
        </ServicesWrapper>
        {/* <h1 style={{ padding: "5rem 0rem" }}>Tech Stack</h1>
        <h2>Next Js, React Js, Tailwind CSS, </h2>
        <h2>Node Js, Nest Js, Express, </h2> */}
      </ServicesContainer>
    </>
  );
};

export default Services;

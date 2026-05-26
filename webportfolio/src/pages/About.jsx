import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const About = () => (
  <Page>
    <SkipLink href="#content">Skip to content</SkipLink>
    <BackButton to="/" aria-label="Back to home">←</BackButton>

    <NameRail aria-hidden="true">
      <NameRailText>Julia E Dyck</NameRailText>
    </NameRail>

    <Main id="content">
      <Top>
        <H1>About</H1>
        <Bio>
          I'm a Canadian artist and technologist based in Brussels. My professional
          practice spans web development, media production, and communications strategy —
          with over a decade of experience working across cultural organizations, media
          institutions, and arts infrastructure in Europe and North America.
        </Bio>
        <Bio>
          I build websites for artists and cultural organizations: accessible, performant,
          and built to last. I've produced online courses for LinkedIn Learning, podcast
          series, and audio work for institutions including the Canadian Media Fund. In
          communications, I've led digital strategy for organizations including KIKK
          Festival (Belgium), OBORO Artist-Run Centre (Montréal), and the Institut Simone
          de Beauvoir at Concordia University — managing social media, editorial content,
          press relations, and multilingual communications across English, French, and
          Dutch.
        </Bio>
        <Bio>
          I work with people doing serious work who want it made to the same standard.
          Available for web projects, media production, and fractional communications
          across Europe and North America.
        </Bio>
      </Top>

      <Section aria-label="Contact">
        <SectionTitle>Contact</SectionTitle>
        <ContactRow>
          <ContactItem>
            <Label>Email</Label>
            <A href="mailto:juliaedyck@gmail.com">juliaedyck@gmail.com</A>
          </ContactItem>
          <ContactItem>
            <Label>Location</Label>
            <span>Brussels / remote</span>
          </ContactItem>
          <ContactItem>
            <Label>Web</Label>
            <A href="https://www.juliaedyck.com" target="_blank" rel="noreferrer">
              juliaedyck.com
            </A>
          </ContactItem>
          <ContactItem>
            <Label>Hypnotherapy &amp; sound practice</Label>
            <A href="https://spectral.center" target="_blank" rel="noreferrer">
              spectral.center
            </A>
          </ContactItem>
        </ContactRow>
      </Section>
    </Main>
  </Page>
);

const colors = {
  bgFrom: "#F5EFA0",
  bgTo: "#F2C8C0",
  ink: "#111",
  inkSoft: "rgba(0,0,0,0.65)",
  border: "rgba(0,0,0,0.18)",
  card: "rgba(255,255,255,0.22)",
};

const Page = styled.div`
  background: linear-gradient(160deg, ${colors.bgFrom} 0%, ${colors.bgTo} 100%);
  min-height: 100vh;
  color: ${colors.ink};
`;

const SkipLink = styled.a`
  position: absolute;
  left: 12px;
  top: 12px;
  padding: 10px 12px;
  background: #fff;
  color: #000;
  text-decoration: none;
  border: 1px solid ${colors.border};
  transform: translateY(-150%);
  &:focus {
    transform: translateY(0);
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

const BackButton = styled(Link)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  color: ${colors.ink};
  text-decoration: none;
  border: 1px solid ${colors.border};
  background: rgba(255,255,255,0.22);

  &:hover {
    color: #F2C8C0;
    text-shadow: 0 0 10px #F2C8C0;
  }

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

const NameRail = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 110px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;

  @media (max-width: 820px) {
    display: none;
  }
`;

const NameRailText = styled.div`
  font-family: "Bodoni Moda", serif;
  writing-mode: vertical-rl;
  transform: scale(-1);
  font-size: 88px;
  line-height: 0.9;
  padding: 24px 0;
`;

const Main = styled.main`
  width: min(980px, 100%);
  margin: 0 auto;
  padding: clamp(18px, 4vw, 48px);

  @media (min-width: 821px) {
    padding-left: 150px;
  }
`;

const Top = styled.header`
  padding-top: 8px;
  padding-bottom: 28px;
`;

const H1 = styled.h1`
  font-family: "Bodoni Moda", serif;
  font-size: clamp(56px, 8vw, 96px);
  letter-spacing: -0.02em;
  line-height: 0.95;
  margin: 0;
`;

const Bio = styled.p`
  margin: 14px 0 0;
  max-width: 62ch;
  color: ${colors.inkSoft};
  font-family: "Raleway", sans-serif;
  line-height: 1.5;
`;

const Section = styled.section`
  padding: 26px 0;
  border-top: 1px solid rgba(0,0,0,0.15);
`;

const SectionTitle = styled.h2`
  font-family: "Bodoni Moda", serif;
  font-weight: 700;
  font-size: 22px;
  margin: 0 0 14px;
  letter-spacing: 0;
`;

const ContactRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const ContactItem = styled.div`
  border: 1px solid ${colors.border};
  background: ${colors.card};
  padding: 12px;
  font-family: "Raleway", sans-serif;
`;

const Label = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${colors.inkSoft};
  margin-bottom: 6px;
`;

const A = styled.a`
  color: ${colors.ink};
  text-decoration: none;

  &:hover {
    color: #F2C8C0;
    text-shadow: 0 0 10px #F2C8C0;
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

export default About;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web",
    to: "/web",
    description: "Websites for artists, cultural organizations, and media projects.",
  },
  {
    title: "Media",
    to: "/media",
    description: "Podcast production, online courses, and digital media from concept to delivery.",
  },
  {
    title: "Communications",
    to: "/comms",
    description:
      "Editorial strategy, social media, and fractional communications for cultural organizations.",
  },
];

const Home = () => (
  <Page>
    <SkipLink href="#content">Skip to content</SkipLink>

    <NameRail aria-hidden="true">
      <NameRailText>Julia E Dyck</NameRailText>
    </NameRail>

    <Main id="content">
      <Top>
        <H1>Julia E Dyck</H1>
        <Tagline>
          I work at the intersection of communications, media, technology, and art —
          building digital experiences, shaping editorial strategy, and creating the
          conditions for culture to reach the people it matters to.
        </Tagline>
        <About>
          I work with artists, cultural organizations, and media projects across Europe
          and North America. My practice spans three areas — web development, media
          production, and communications strategy — and the approach is consistent across
          all of them: clarity, craft, and systems that hold up over time. Based in Brussels.
        </About>

        <CTA>
          <CTAButton as={Link} to="/about">More about me</CTAButton>
        </CTA>
      </Top>

      <Section aria-label="Services">
        <ServiceGrid>
          {services.map((s) => (
            <ServiceCard key={s.to} to={s.to}>
              <ServiceTitle>{s.title}</ServiceTitle>
              <ServiceDesc>{s.description}</ServiceDesc>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </Section>

      <Section aria-label="Contact">
        <SectionTitle>Contact</SectionTitle>
        <P>
          If you're working on a project in art, research, publishing, or culture and want
          a collaborator who brings clarity and craft — let's talk.
        </P>
        <ContactRow>
          <ContactItem>
            <Label>Email</Label>
            <A href="mailto:juliaedyck@gmail.com">juliaedyck@gmail.com</A>
          </ContactItem>
          <ContactItem>
            <Label>Location</Label>
            <span>Brussels / remote</span>
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

const Tagline = styled.p`
  margin: 10px 0 0;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  max-width: 62ch;
  line-height: 1.4;
`;

const About = styled.p`
  margin: 14px 0 0;
  max-width: 62ch;
  color: ${colors.inkSoft};
  font-family: "Raleway", sans-serif;
  line-height: 1.5;
`;

const CTA = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 10px 14px;
  border: 1px solid rgba(0,0,0,0.25);
  background: rgba(0,0,0,0.08);
  text-decoration: none;
  color: ${colors.ink};
  font-family: "Raleway", sans-serif;
  font-weight: 600;

  &:hover {
    background: #111;
    color: #fff;
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
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

const ServiceGrid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(Link)`
  display: block;
  border: 1px solid ${colors.border};
  background: ${colors.card};
  padding: 14px;
  text-decoration: none;
  color: ${colors.ink};

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

const ServiceTitle = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  margin: 0 0 8px;
`;

const ServiceDesc = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${colors.inkSoft};
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`;

const P = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${colors.inkSoft};
  line-height: 1.5;
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

export default Home;

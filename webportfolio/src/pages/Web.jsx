import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "A Kind of Harmony",
    href: "https://akindofharmony.com/",
    role: ["Podcast production", "Web design", "Web development"],
    stack: ["React", "Styled Components"],
    highlight:
      "Audio-forward site designed for long listening sessions, with a calm editorial layout and clear content hierarchy.",
  },
  {
    title: "Hadassah Emmerich",
    href: "https://hadassahemmerich.com/",
    role: ["Web design", "Web development"],
    stack: ["PHP", "CSS", "Kirby CMS"],
    highlight:
      "Personal website for an artist, balancing intimacy and professionalism through restrained typography and generous spacing.",
  },
  {
    title: "Liew Niyomkarn",
    href: "https://www.liewniyomkarn.com/",
    role: ["Web design", "Web development"],
    stack: ["PHP", "CSS", "Kirby CMS"],
    highlight:
      "Portfolio site prioritizing visual work while remaining lightweight, readable, and easy to maintain.",
  },
  {
    title: "Umland Editions",
    href: "https://umland.be",
    role: ["Web design", "Web development"],
    stack: ["React", "Node"],
    highlight:
      "Clear, accessible website for a cultural organization, focused on usability, performance, and long-term editability.",
  },
];

const archiveProjects = [
  {
    title: "TR4NC3",
    href: "http://tr4nc3.com/",
    role: ["Project", "Web design", "Web development"],
    stack: ["React"],
  },
  {
    title: "Suzanna Inglada",
    href: "https://susannainglada.com/",
    role: ["Project", "Web design", "Web development"],
    stack: ["WordPress"],
  },
  {
    title: "Spectral Center",
    href: "https://spectral.center",
    role: ["Web design", "Web development"],
    stack: ["React"],
  },
  {
    title: "Listening Field",
    href: "https://listeningfield.be/",
    role: ["Project", "Web design", "Web development"],
    stack: ["React"],
  },
  {
    title: "JuliaEdyck.com",
    href: "https://www.juliaedyck.com/",
    role: ["Web design", "Web development"],
  },
];

const Web = () => (
  <Page>
    <SkipLink href="#content">Skip to content</SkipLink>
    <BackButton to="/" aria-label="Back to home">←</BackButton>

    <NameRail aria-hidden="true">
      <NameRailText>Julia E Dyck</NameRailText>
    </NameRail>

    <Main id="content">
      <Top>
        <H1>Web</H1>
        <Offer>
          I make websites for people doing interesting work. Usually artists, curators, and
          organizations with high aesthetic standards, complex multilingual needs, and no
          patience for generic templates. The brief is almost always the same: something
          distinctive that doesn't get in the way of the work, that performs well, and that
          you don't need a developer to update. I work in React, Kirby CMS, PHP, and modern
          CSS. Clients across Europe and North America.
        </Offer>
      </Top>

      <Section aria-label="Projects" id="projects">
        <SectionTitle>Selected projects</SectionTitle>
        <Grid>
          {featuredProjects.map((p) => (
            <Card key={p.href}>
              <CardTop>
                <CardTitle>
                  <A href={p.href} target="_blank" rel="noreferrer">
                    {p.title}
                  </A>
                </CardTitle>
                <Meta>{p.role.join(" • ")}</Meta>
              </CardTop>

              <P>{p.highlight}</P>

              <Badges aria-label="Tech used">
                {p.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </Badges>

              <CardFooter>
                <SmallLink href={p.href} target="_blank" rel="noreferrer">
                  Visit site ↗
                </SmallLink>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section aria-label="Case study">
        <SectionTitle>Case study — Hadassah Emmerich</SectionTitle>
        <P>
          I love making websites for other artists. The challenge with Hadassah's work is that
          a screen is the opposite of what it is. She makes murals and installations — things
          that surround you, that you move through. A standard portfolio would flatten all of
          that. We took our cues from a published edition she'd worked on and let her colors
          do what they do in real life: take over. Minimal design, clean navigation, maximum
          presence.
        </P>
        <SmallLink
          href="https://hadassahemmerich.com/"
          target="_blank"
          rel="noreferrer"
        >
          Visit site ↗
        </SmallLink>
      </Section>

      <Section aria-label="More work">
        <Details>
          <summary>More work</summary>
          <ArchiveList>
            {archiveProjects.map((p) => (
              <li key={p.href}>
                <A href={p.href} target="_blank" rel="noreferrer">
                  {p.title}
                </A>
                <ArchiveMeta> — {p.role.join(" • ")}</ArchiveMeta>
                {p.stack && (
                  <ArchiveMeta> — {p.stack.join(" • ")}</ArchiveMeta>
                )}
              </li>
            ))}
          </ArchiveList>
        </Details>
      </Section>

      <Section aria-label="Contact">
        <CTA>
          <CTAButton href="mailto:juliaedyck@gmail.com">
            juliaedyck@gmail.com
          </CTAButton>
        </CTA>
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

const Offer = styled.p`
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

const Grid = styled.div`
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(2px);
  padding: 18px;
  border: 1px solid transparent;
  transition: border 200ms ease, background 200ms ease;

  &:hover {
    border: 1px solid rgba(0,0,0,0.15);
  }
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
`;

const Meta = styled.div`
  font-family: "Raleway", sans-serif;
  color: ${colors.inkSoft};
  font-size: 14px;
`;

const P = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${colors.inkSoft};
  line-height: 1.5;
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const Badge = styled.span`
  border: 1px solid ${colors.border};
  padding: 4px 8px;
  font-family: "Raleway", sans-serif;
  font-size: 12px;
`;

const CardFooter = styled.div`
  display: flex;
  gap: 12px;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 14px;
`;

const SmallLink = styled.a`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  color: ${colors.ink};
  text-decoration: none;

  &:hover {
    color: #F2C8C0;
    text-shadow: 0 0 10px #F2C8C0;
    text-decoration: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 180ms ease;
    &:hover {
      transform: translateY(-1px);
    }
  }

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

const Details = styled.details`
  summary {
    cursor: pointer;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
  }
`;

const ArchiveList = styled.ul`
  margin: 10px 0 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
`;

const ArchiveMeta = styled.span`
  font-family: "Raleway", sans-serif;
  color: ${colors.inkSoft};
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

const CTA = styled.div`
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

export default Web;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "React with Styled Components",
    href: "https://www.linkedin.com/learning/react-with-styled-components",
    platform: "LinkedIn Learning",
    description:
      "Component architecture, styling systems, scalable React patterns. Full production: curriculum design, scripting, recording, and editing.",
  },
  {
    title: "Practice It: CSS Layout",
    href: "https://www.linkedin.com/learning/practice-it-css-layout",
    platform: "LinkedIn Learning",
    description:
      "CSS layout techniques, responsive design, practical exercises. Full production: curriculum design, scripting, recording, and editing.",
  },
];

const audioWork = [
  {
    title: "A Kind of Harmony",
    href: "https://akindofharmony.com/",
    role: "Podcast production",
    description: "Ongoing podcast series. Production, editing, and sound design.",
  },
  {
    title: "Redesigning Value — Canadian Media Fund",
    href: "https://vision2032.cmf-fmc.ca/redesigning-value/economic-potential-and-growth-the-business-side-of-bringing-canadian",
    role: "Audio production · Sound design",
    description:
      "Commissioned audio piece accompanying the CMF's Vision 2032 report on economic potential in Canadian media.",
  },
  {
    title: "Bâtard Podcast",
    href: "https://2021.batard.be/batard-2021/podcast/",
    role: "Production · Sound design",
  },
  {
    title: "Circuits of Sand and Water",
    href: "https://circuitsofsandandwater.com/",
    role: "Composition · Sound design",
  },
];

const Media = () => (
  <Page>
    <SkipLink href="#content">Skip to content</SkipLink>
    <BackButton to="/" aria-label="Back to home">←</BackButton>

    <NameRail aria-hidden="true">
      <NameRailText>Julia E Dyck</NameRailText>
    </NameRail>

    <Main id="content">
      <Top>
        <H1>Media</H1>
        <Offer>
          I've designed and produced online courses for LinkedIn Learning, podcast series,
          and audio work for cultural institutions and media organizations — handling
          curriculum, scripting, recording, editing, and final delivery from the same
          project.
        </Offer>
        <Offer>
          If you want to make a podcast, an online course, or a digital media project, I
          can take on the full production — from shaping the concept to releasing the thing.
          I work well with clients who know what they want to say and need someone to figure
          out how to make it, technically and editorially.
        </Offer>
      </Top>

      <Section aria-label="Courses">
        <SectionTitle>Courses</SectionTitle>
        <Grid>
          {courses.map((c) => (
            <Card key={c.href}>
              <CardTop>
                <CardTitle>
                  <A href={c.href} target="_blank" rel="noreferrer">
                    {c.title}
                  </A>
                </CardTitle>
                <Meta>{c.platform}</Meta>
              </CardTop>

              <P>{c.description}</P>

              <CardFooter>
                <SmallLink href={c.href} target="_blank" rel="noreferrer">
                  Visit course ↗
                </SmallLink>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section aria-label="Selected audio work">
        <SectionTitle>Selected audio work</SectionTitle>
        <Grid>
          {audioWork.map((a) => (
            <Card key={a.href}>
              <CardTop>
                <CardTitle>
                  <A href={a.href} target="_blank" rel="noreferrer">
                    {a.title}
                  </A>
                </CardTitle>
                <Meta>{a.role}</Meta>
              </CardTop>

              {a.description && <P>{a.description}</P>}

              <CardFooter>
                <SmallLink href={a.href} target="_blank" rel="noreferrer">
                  Visit site ↗
                </SmallLink>
              </CardFooter>
            </Card>
          ))}
        </Grid>
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
  display: flex;
  flex-direction: column;

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

const CardFooter = styled.div`
  display: flex;
  gap: 12px;
  align-items: baseline;
  margin-top: auto;
  padding-top: 14px;
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

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
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

export default Media;

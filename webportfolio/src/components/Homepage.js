import React from "react";
import styled from "styled-components";

/**
 * 1) Curate 4-5 featured projects.
 * 2) Put the rest in `archiveProjects`.
 * 3) Add `slug` now so you can create /project/:slug pages later.
 */
const featuredProjects = [
  {
    title: "A Kind of Harmony",
    href: "https://akindofharmony.com/",
    role: ["Podcast production", "Web design", "Web development"],
    stack: ["React", "Styled Components"],
    highlight:
      "Audio-forward site designed for long listening sessions, with a calm editorial layout and clear content hierarchy.",
    slug: "a-kind-of-harmony",
  },
  {
    title: "Hadassa Hemmerich",
    href: "https://hadassahemmerich.com/",
    role: ["Web design", "Web development"],
    stack: ["PHP", "CSS",  "Kirby CMS"],
    highlight:
      "Personal website for an artist, balancing intimacy and professionalism through restrained typography and generous spacing.",
    slug: "hadassa-hemmerich",
  },
  {
    title: "Liew Niyomkarn",
    href: "https://www.liewniyomkarn.com/",
    role: ["Web design", "Web development"],
    stack: ["PHP", "CSS",  "Kirby CMS"],
    highlight:
      "Portfolio site prioritizing visual work while remaining lightweight, readable, and easy to maintain.",
    slug: "liew-niyomkarn",
  },
  {
    title: "Umland",
    href: "https://umland.be",
    role: ["Web design", "Web development"],
    stack: ["React", "Node"],
    highlight:
      "Clear, accessible website for a cultural organization, focused on usability, performance, and long-term editability.",
    slug: "umland",
  },
];


const archiveProjects = [
  {
    title: "TR4NC3",
    href: "http://tr4nc3.com/",
    role: ["Project", "Web design", "Web development"],
    stack: ["React"],
  },
  // {
  //   title: "Audio Placebo Plaza",
  //   href: "https://audioplaceboplaza.com/",
  //   role: ["Project", "Web design", "Web development"],
  //   stack: ["React"],
  // },
  {
    title: "Spectral Center",
    href: "https://spectral.center",
    role: ["Web design", "Web development"],
    stack: ["React"],
  },
  {
    title: "Listening Field",
    href: "https://listeningfield.be/",
    role: ["Project","Web design", "Web development"],
    stack: ["React"],
  },
  {
    title: "JuliaEdyck.com",
    href: "https://www.juliaedyck.com/",
    role: ["Web design", "Web development"],
  },
  {
    title: "Bâtard Podcast",
    href: "https://2021.batard.be/batard-2021/podcast/",
    role: ["Production", "Sound design"],
  },
  {
    title: "Representation is the future – Canadian Media Fund",
    href:
      "https://vision2032.cmf-fmc.ca/redesigning-value/economic-potential-and-growth-the-business-side-of-bringing-canadian",
    role: ["Production", "Sound design"],
  },
  {
    title: "Circuits of Sand and Water",
    href: "https://circuitsofsandandwater.com/",
    role: ["Composition", "Sound design"],
  },
];


const Homepage = () => {
  return (
    <Page>
      <SkipLink href="#content">Skip to content</SkipLink>

      <NameRail aria-hidden="true">
        <NameRailText>Julia E Dyck</NameRailText>
      </NameRail>

      <Main id="content">
        <Top>
          <H1>Julia E Dyck</H1>
          <Tagline>Web design & development for artists and cultural projects — calm systems, clear structure, and care for content.</Tagline>
          <About>
            I build expressive, resilient websites: clear navigation, strong typography, and systems that stay editable over
            time. I’m at home in React + styled-components, PHP and Wordpress or Kirby CMS, and I care a lot about accessibility and performance.
          </About>

          <CTA>
            <CTAButton href="mailto:juliaedyck@gmail.com">Email me</CTAButton>
            {/* <CTALink href="#projects">View projects</CTALink> */}
          </CTA>
        </Top>

        <Section id="projects" aria-label="Projects">
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

                  {/* Future-ready: wire this to a Project Detail route later */}
                  {/* <SmallMuted>Case study: /project/{p.slug}</SmallMuted> */}
                </CardFooter>
              </Card>
            ))}
          </Grid>

          <Details>
            <summary>More work (archive)</summary>
            <ArchiveList>
              {archiveProjects.map((p) => (
                <li key={p.href}>
                  <A href={p.href} target="_blank" rel="noreferrer">
                    {p.title}
                  </A>
                  <ArchiveMeta> — {p.role.join(" • ")}</ArchiveMeta>
                </li>
              ))}
            </ArchiveList>
          </Details>
        </Section>

<Section aria-label="Teaching">
  <SectionTitle>Teaching & publications</SectionTitle>

  <P>
    I create educational content focused on clarity, maintainable systems, and practical
    frontend workflows. My courses are designed for professional audiences and emphasize
    readable code, design systems, and real-world layouts.
  </P>

  <TeachingItem>
    <strong>
      <A
        href="https://www.linkedin.com/learning/react-with-styled-components"
        target="_blank"
        rel="noreferrer"
      >
        React with Styled Components
      </A>
    </strong>
    <div>LinkedIn Learning</div>
    <SmallMuted>
      Online course · Component architecture, styling systems, scalable React patterns
    </SmallMuted>
  </TeachingItem>

  <TeachingItem>
    <strong>
      <A
        href="https://www.linkedin.com/learning/practice-it-css-layout"
        target="_blank"
        rel="noreferrer"
      >
        Practice It: CSS Layout
      </A>
    </strong>
    <div>LinkedIn Learning</div>
    <SmallMuted>
      Hands-on course · CSS layout techniques, responsive design, practical exercises
    </SmallMuted>
  </TeachingItem>
</Section>


        <Section aria-label="Contact">
          <SectionTitle>Contact</SectionTitle>
          <P>
            If you’re building a project in art, research, publishing, or culture and want a site that’s distinctive but
            calm to use, let’s talk.
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
};

const colors = {
  bg: "#8cfa9c",
  ink: "#111",
  inkSoft: "rgba(0,0,0,0.72)",
  border: "rgba(0,0,0,0.25)",
  card: "rgba(255,255,255,0.12)",
};

const Page = styled.div`
  min-height: 100vh;
  background: ${colors.bg};
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
  font-family: "Source Serif Pro", serif;
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
  padding-left: clamp(18px, 4vw, 48px);

  @media (min-width: 821px) {
    padding-left: 150px; /* space for name rail */
  }
`;

const Top = styled.header`
  padding-top: 8px;
  padding-bottom: 28px;
`;

const H1 = styled.h1`
  font-family: "Source Serif Pro", serif;
  font-size: clamp(42px, 5vw, 64px);
  margin: 0;
`;

const Tagline = styled.p`
  margin: 10px 0 0;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
`;

const About = styled.p`
  margin: 14px 0 0;
  max-width: 62ch;
  color: ${colors.inkSoft};
  font-family: "Work Sans", sans-serif;
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
  border: 1px solid ${colors.border};
  background: rgba(255, 255, 255, 0.25);
  text-decoration: none;
  color: ${colors.ink};
  font-family: "Work Sans", sans-serif;
  font-weight: 600;

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

// const CTALink = styled.a`
//   display: inline-block;
//   padding: 10px 14px;
//   text-decoration: none;
//   color: ${colors.ink};
//   font-family: "Work Sans", sans-serif;

//   &:focus {
//     outline: 2px solid #000;
//     outline-offset: 2px;
//   }
// `;

const Section = styled.section`
  padding: 26px 0;
  border-top: 1px solid ${colors.border};
`;

const SectionTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  margin: 0 0 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
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
  border: 1px solid ${colors.border};
  background: ${colors.card};
  padding: 14px;
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
`;

const Meta = styled.div`
  font-family: "Work Sans", sans-serif;
  color: ${colors.inkSoft};
  font-size: 14px;
`;

const P = styled.p`
  font-family: "Work Sans", sans-serif;
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
  font-family: "Work Sans", sans-serif;
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
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  color: ${colors.ink};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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

const SmallMuted = styled.span`
  font-family: "Work Sans", sans-serif;
  color: ${colors.inkSoft};
  font-size: 12px;
`;

const Details = styled.details`
  margin-top: 16px;

  summary {
    cursor: pointer;
    font-family: "Work Sans", sans-serif;
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
  font-family: "Work Sans", sans-serif;
  color: ${colors.inkSoft};
`;

const A = styled.a`
  color: ${colors.ink};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
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
`;

const Label = styled.div`
  font-family: "Work Sans", sans-serif;
  font-size: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${colors.inkSoft};
  margin-bottom: 6px;
`;

const TeachingItem = styled.div`
  border: 1px solid ${colors.border};
  background: ${colors.card};
  padding: 14px;
  margin-top: 12px;
  font-family: "Work Sans", sans-serif;
`;



export default Homepage;

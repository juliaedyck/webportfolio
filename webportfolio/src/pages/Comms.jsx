import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const writingPieces = [
  {
    title: "Attunement as Method",
    href: "https://www.highpitchmagazine.com/issues/issue-02/attunement-as-method-Julia-E-Dyck-Amanda-Harvey",
    publication: "High Pitch Magazine",
    with: "Amanda Harvey",
  },
  {
    title: "Siri Is Not Genderless",
    href: "https://www.vice.com/en/article/siri-is-not-genderless/",
    publication: "Vice",
  },
  {
    title: "Ensemble Obiora",
    href: "https://ckut.ca/music/ensemble-obiora/",
    publication: "CKUT Radio",
  },
  {
    title: "Law Focus",
    href: "https://issuu.com/lawmcgill/docs/law_focus_fall_2021/16",
    publication: "McGill Faculty of Law",
    note: "Fall 2021",
  },
  {
    title: "Focus Law",
    href: "https://issuu.com/lawmcgill/docs/mcg_focus_law_2023-24_web_11-9-2023",
    publication: "McGill Faculty of Law",
    note: "2023–24",
  },
];

const socialMedia = [
  {
    name: "TiNWwP",
    href: "https://www.instagram.com/tinwwp/",
    years: "2023–24",
  },
  {
    name: "KIKK Festival",
    href: "https://www.instagram.com/kikk_festival/",
    years: "2022",
  },
  {
    name: "OBORO Artist-Run Centre",
    href: "https://www.instagram.com/oboro4001/",
    years: "2020–21",
  },
  {
    name: "A Kind of Harmony",
    href: "https://www.instagram.com/akindofharmony/",
    years: "2021–25",
  },
];

const Comms = () => (
  <Page>
    <SkipLink href="#content">Skip to content</SkipLink>
    <BackButton to="/" aria-label="Back to home">←</BackButton>

    <NameRail aria-hidden="true">
      <NameRailText>Julia E Dyck</NameRailText>
    </NameRail>

    <Main id="content">
      <Top>
        <H1>Communications</H1>
        <Offer>
          I've led digital communications for arts and cultural organizations working at the
          intersection of culture, technology, and social justice — managing social media,
          newsletters, press relations, website development, and multilingual content in
          English, French, and Dutch.
        </Offer>
        <Offer>
          For organizations that need strategic communications thinking without a full-time
          hire, I offer fractional support: editorial planning, content strategy, social
          media, and institutional communications — scoped to what the project actually
          requires.
        </Offer>
      </Top>

      <Section aria-label="Writing">
        <SectionTitle>Writing</SectionTitle>
        <P>
          Published work spans institutional communications, criticism, and cultural
          journalism.
        </P>
        <WorkList>
          {writingPieces.map((p) => (
            <WorkItem key={p.href}>
              <A href={p.href} target="_blank" rel="noreferrer">
                {p.title}
              </A>
              <WorkMeta>
                {p.publication}
                {p.with && `, with ${p.with}`}
                {p.note && ` — ${p.note}`}
              </WorkMeta>
            </WorkItem>
          ))}
        </WorkList>
      </Section>

      <Section aria-label="Social media">
        <SectionTitle>Social media</SectionTitle>
        <P>
          Social media direction for cultural organizations across Belgium and Canada,
          2020–2025. Work has included content strategy, editorial calendars, copywriting
          in English and French, community management, and visual direction.
        </P>
        <WorkList>
          {socialMedia.map((s) => (
            <WorkItem key={s.href}>
              <A href={s.href} target="_blank" rel="noreferrer">
                {s.name}
              </A>
              <WorkMeta>{s.years}</WorkMeta>
            </WorkItem>
          ))}
        </WorkList>
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

const P = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${colors.inkSoft};
  line-height: 1.5;
  margin: 0 0 16px;
`;

const WorkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const WorkItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.border};
  font-family: "Raleway", sans-serif;

  &:first-child {
    border-top: 1px solid rgba(0,0,0,0.15);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4px;
  }
`;

const WorkMeta = styled.span`
  font-family: "Raleway", sans-serif;
  color: ${colors.inkSoft};
  font-size: 14px;
  flex-shrink: 0;
`;

const A = styled.a`
  color: ${colors.ink};
  text-decoration: none;
  font-family: "Raleway", sans-serif;

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

export default Comms;

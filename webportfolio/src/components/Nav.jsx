import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const colors = {
  bgFrom: "#F5EFA0",
  ink: "#111",
  border: "rgba(0,0,0,0.18)",
};

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Bar>
      <Inner>
        <Logo to="/" onClick={() => setOpen(false)}>
          Julia E Dyck
        </Logo>

        <MenuToggle
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </MenuToggle>

        <Links open={open}>
          <StyledNavLink to="/web" onClick={() => setOpen(false)}>
            Web
          </StyledNavLink>
          <StyledNavLink to="/media" onClick={() => setOpen(false)}>
            Media
          </StyledNavLink>
          <StyledNavLink to="/comms" onClick={() => setOpen(false)}>
            Comms
          </StyledNavLink>
          <StyledNavLink to="/about" onClick={() => setOpen(false)}>
            About
          </StyledNavLink>
        </Links>
      </Inner>
    </Bar>
  );
};

const Bar = styled.nav`
  background: ${colors.bgFrom};
  border-bottom: 1px solid ${colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Inner = styled.div`
  width: min(980px, 100%);
  margin: 0 auto;
  padding: 0 clamp(18px, 4vw, 48px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 52px;
  gap: 0 20px;
`;

const Logo = styled(NavLink)`
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: ${colors.ink};
  text-decoration: none;
  letter-spacing: 0.01em;
  padding: 14px 0;
  flex-shrink: 0;

  &:hover {
    color: #F2C8C0;
    text-shadow: 0 0 10px #F2C8C0;
  }

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

const MenuToggle = styled.button`
  display: none;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: none;
  border: 1px solid ${colors.border};
  padding: 6px 10px;
  cursor: pointer;
  color: ${colors.ink};

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    width: 100%;
    border-top: ${({ open }) => (open ? `1px solid ${colors.border}` : "none")};
    overflow: hidden;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    transition: max-height 240ms ease;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${colors.ink};
  text-decoration: none;
  padding: 14px 0;

  &:hover {
    background: #F2C8C0;
    backdrop-filter: blur(2px);
    text-decoration: none;
  }

  &.active {
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    padding: 12px 0;
    width: 100%;
    border-bottom: 1px solid ${colors.border};
  }
`;

export default Nav;

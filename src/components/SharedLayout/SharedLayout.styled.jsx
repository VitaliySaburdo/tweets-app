import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Header = styled.header`
  height: 70px;
  background-color: #471ca9;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 40px;
`;
export const StyledSpan = styled.span`
  color: #5cd3a8;
  &:hover {
    color: #2c9770;
  }
`;

export const Main = styled.main`
  min-height: calc(100vh - 158px);
`;

export const StyledNavLink = styled(NavLink)`
  font-family: 'Montserrat';
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  color: #a499bd;
  text-decoration: none;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  fill: #a499bd;
  &:hover {
    color: #d13bd1;
    fill: #d13bd1;
  }

  &.active {
    color: #ffffff;
    fill: #ffffff;
  }
`;

export const StyledLink = styled(Link)`
  font-family: 'Montserrat';
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  color: #a499bd;
  text-decoration: none;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #d13bd1;
  }
`;
export const Box = styled.div`
  display: flex;
  gap: 40px;
`;

export const StyledSVG = styled.svg`
  fill: inherit;
  margin-right: 3px;
`;

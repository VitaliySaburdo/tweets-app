import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: #471ca9;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 20px 0px;
  height: 100%;
`;

export const Link = styled.a`
  font-family: 'Montserrat';
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: #a499bd;
  text-decoration: none;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #d13bd1;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 0;
  gap: 10px;
  background: rgba(255, 255, 255, 0.1);

  transition-property: background-color, fill;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: #d13bd1;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledSVG = styled.svg`
  fill: #a499bd;
`;

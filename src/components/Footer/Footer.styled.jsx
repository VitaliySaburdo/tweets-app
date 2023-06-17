import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: #471ca9;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px 10px 0px;
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

import { Outlet } from 'react-router-dom';
import {
  Header,
  Main,
  StyledNavLink,
  Wrapper,
  Nav,
  StyledLink,
  Box,
  StyledSVG,
} from './SharedLayout.styled';
import { Container } from '../Container/Container';
import { Suspense } from 'react';
import { Footer } from 'components/Footer/Footer';
import icons from '../../image/icons.svg';
// import {Loader} from '../Loader/Loader'

export const SharedLayout = () => {
  const handleEmailLinkClick = () => {
    window.location.href = 'mailto:vsaburdo@mail.com';
  };

  const handlePhoneLinkClick = () => {
    window.location.href = 'tel:+380677764273';
  };
  return (
    <>
      <Header>
        <Container>
          <Wrapper>
            <Nav>
              <StyledNavLink to="/" end>
                <StyledSVG width="20" height="20">
                  <use href={icons + '#twitter'}></use>
                </StyledSVG>
                <span>Tweets App</span>
              </StyledNavLink>
              <StyledNavLink to="/tweets">Tweets</StyledNavLink>
            </Nav>
            <Box>
              <StyledLink onClick={handleEmailLinkClick}>
                vsaburdo@gmail.com
              </StyledLink>
              <StyledLink onClick={handlePhoneLinkClick}>
                +38 067 776 42 73
              </StyledLink>
            </Box>
          </Wrapper>
        </Container>
      </Header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
};

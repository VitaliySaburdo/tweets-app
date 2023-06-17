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

export const SharedLayout = () => {
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
              <StyledLink href="mailto:vsaburdo@gmail.com">
                <StyledSVG width="20" height="20">
                  <use href={icons + '#mail'}></use>
                </StyledSVG>
                <span>vsaburdo@gmail.com</span>
              </StyledLink>
              <StyledLink href="tel:+38677764273">
                <StyledSVG width="20" height="20">
                  <use href={icons + '#phone'}></use>
                </StyledSVG>
                <span>+38 067 776 42 73</span>
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

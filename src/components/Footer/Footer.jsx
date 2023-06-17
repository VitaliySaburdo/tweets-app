import { Container } from '../Container/Container';
import {
  Wrapper,
  FooterStyled,
  Link,
  SocialLink,
  List,
  StyledSVG,
} from './Footer.styled';
import icons from '../../image/icons.svg';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Wrapper>
          <address>
            <ul>
              <li>
                <Link
                  href="https://goo.gl/maps/xzSNLGpuQCazESF16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nezhinskaya str. 16, kv.5 Kyiv, Ukraine 36007
                </Link>
              </li>
              <li>
                <Link href="mailto:info@devstudio.com">info@devstudio.com</Link>
              </li>
              <li>
                <Link href="tel:+380961111111">+38 096 111 11 11</Link>
              </li>
            </ul>
          </address>

          <List>
            <li>
              <SocialLink href="2" target="_blank" rel="noopener noreferrer">
                <StyledSVG width="20" height="20">
                  <use href={icons + '#send'}></use>
                </StyledSVG>
              </SocialLink>
            </li>
            <li>
              <SocialLink href="3" target="_blank" rel="noopener noreferrer">
                <StyledSVG width="20" height="20">
                  <use href={icons + '#facebook'}></use>
                </StyledSVG>
              </SocialLink>
            </li>
            <li>
              <SocialLink
                href="https://www.linkedin.com/in/vitaliy-saburdo-73363a264/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledSVG width="20" height="20">
                  <use href={icons + '#linkedin'}></use>
                </StyledSVG>
              </SocialLink>
            </li>
          </List>
        </Wrapper>
      </Container>
    </FooterStyled>
  );
};

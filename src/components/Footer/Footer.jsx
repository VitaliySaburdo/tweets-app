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
                <Link href="mailto:vsaburdo@gmail.com">vsaburdo@gmail.com</Link>
              </li>
              <li>
                <Link href="tel:+38677764273">+38 067 776 42 73</Link>
              </li>
            </ul>
          </address>

          <List>
            <li>
              <SocialLink
                href="https://t.me/Vitaliy_Saburdo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledSVG width="20" height="20">
                  <use href={icons + '#send'}></use>
                </StyledSVG>
              </SocialLink>
            </li>
            <li>
              <SocialLink
                href="https://github.com/VitaliySaburdo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledSVG width="30" height="30">
                  <use href={icons + '#github'}></use>
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

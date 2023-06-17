import { Container } from '../Container/Container';
import { Wrapper, FooterStyled, Link } from './Footer.styled';
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

          <ul>
            <li>
              <a class="footer-social__link" href="2">
                <svg width="20" height="20">
                  <use href={icons + '#twitter'}></use>
                </svg>
              </a>
            </li>
            <li>
              <a class="footer-social__link" href="3">
                <svg width="20" height="20">
                  <use href={icons + '#facebook'}></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                class="footer-social__link"
                href="https://www.linkedin.com/in/vitaliy-saburdo-73363a264/"
              >
                <svg width="20" height="20">
                  <use href={icons + '#linkedin'}></use>
                </svg>
              </a>
            </li>
          </ul>
        </Wrapper>
      </Container>
    </FooterStyled>
  );
};

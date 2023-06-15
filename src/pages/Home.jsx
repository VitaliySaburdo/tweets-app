import { Container } from "../components/Container/Container";
import { Section } from "../components/Section/Section";
import TwitterLogo from '../image/TwitterLogo.webp'

const Home = () => {
  return (
    <Section>
      <Container>
        <img src={TwitterLogo} alt="twitter logo"/>
        </Container>
    </Section>
  );
};

export default Home;

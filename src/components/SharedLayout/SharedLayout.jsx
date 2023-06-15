import { Outlet } from "react-router-dom";
import { Header, Link, Wrapper, Nav } from "./SharedLayout.styled";
import { Container } from "../Container/Container";
import { Suspense } from "react";
// import Icon from "../../image/twitter.svg";
// import {Loader} from '../Loader/Loader'

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Wrapper>
            <Link to="/" end>
              {/* <img src={Icon} alt="Twitter Icon" /> */}
              <span>Tweets App</span>
            </Link>
            <Nav>
              <Link to="/tweets">Tweets</Link>
            </Nav>
          </Wrapper>
        </Container>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

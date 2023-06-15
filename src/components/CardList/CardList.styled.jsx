import styled from "styled-components";
import { Link } from 'react-router-dom';

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    padding-bottom: 20px;
    padding-top: 20px;
`
export const StyledLink = styled(Link)`
display: inline-block;
  text-decoration: none;
`;

  
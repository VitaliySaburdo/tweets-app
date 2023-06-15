import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding-bottom: 20px;
  padding-top: 20px;
`;
export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledInput = styled.select`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  width: 196px;
  height: 50px;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const StyledOption = styled.option`
  text-align: center;
`;

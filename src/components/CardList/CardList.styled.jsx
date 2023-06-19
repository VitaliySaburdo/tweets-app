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

export const SelectWrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    right: 15px;
    transform: translateY(50%);

    pointer-events: none;

    display: block;

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10.4px 6px 0 6px;
    border-color: #471ca9 transparent transparent transparent;
  }
`;

export const StyledSelect = styled.select`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;

  cursor: pointer;

  width: 196px;
  height: 50px;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export const StyledOption = styled.option`
  text-align: center;
`;

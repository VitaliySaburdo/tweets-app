import styled from "styled-components";

export const Wrapper = styled.li`
  position: relative;
  padding-top: 28px;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const Question = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 18px;
`;
export const Frame = styled.img`
  position: absolute;
  left: 150px;
  top: 178px;
`;
export const User = styled.img`
  position: absolute;
  left: 163px;
  top: 187px;
  z-index: 100;
  border-radius: 50%;
`;

export const Logo = styled.img`
position: absolute;
left: 20px;
top: 20px;
`

const StyledText = styled.p`
  font-family: "Montserrat";
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
export const Tweets = styled(StyledText)`
  margin-top: 62px;
`;
export const Followers = styled(StyledText)`
  margin-top: 16px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  margin-left: auto;
  margin-right: auto;

  cursor: pointer;

  margin-top: 28px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  color: #373737;

  width: 196px;
  height: 50px;

  background-color: ${(props) => (props.background ? "#5CD3A8" : "#ebd8ff")};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${(props) => (props.background ? "#2c9770" : "#ad8ece")};

  }
`;

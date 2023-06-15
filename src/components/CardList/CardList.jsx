import { CardItem } from "../CardItem/CardItem";
import { List, StyledLink } from "./CardList.styled";

import { Button } from "../Button/Button";

export const CardList = ({ cards }) => {
  return (
    <>
      <StyledLink to="/">
        <Button type="Button">Back</Button>
      </StyledLink>
      <List>
        {cards.map((card) => (
          <CardItem
            key={card.id}
            id={card.id}
            user={card.user}
            tweets={card.tweets}
            followers={card.followers}
            avatar={card.avatar}
          />
        ))}
      </List>
    </>
  );
};

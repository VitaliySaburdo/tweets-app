import React, { useState } from 'react';
import { CardItem } from '../CardItem/CardItem';
import {
  List,
  StyledLink,
  Wrapper,
  StyledInput,
  StyledOption,
} from './CardList.styled';

import { Button } from '../Button/Button';

export const CardList = ({ cards }) => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  return (
    <>
      <Wrapper>
        <StyledLink to="/">
          <Button type="Button">Back</Button>
        </StyledLink>
        <StyledInput value={filter} onChange={handleFilterChange}>
          <StyledOption value="all">Show All</StyledOption>
          <StyledOption value="follow">Follow</StyledOption>
          <StyledOption value="followings">Followings</StyledOption>
        </StyledInput>
      </Wrapper>
      <List>
        {cards.map(card => (
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

import React, { useState } from 'react';
import { CardItem } from '../CardItem/CardItem';
import {
  List,
  StyledLink,
  Wrapper,
  StyledSelect,
  StyledOption,
  SelectWrapper,
} from './CardList.styled';

import { Button } from '../Button/Button';

export const CardList = ({ cards }) => {
  const [filter, setFilter] = useState('all');
  const [followings, setFollowing] = useState([]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleCardAction = (cardId, isFollowing) => {
    setFollowing(prevState => ({
      ...prevState,
      [cardId]: !isFollowing,
    }));
  };

  const filteredCards = () => {
    if (filter === 'follow') {
      return cards.filter(card => followings[card.id] !== true);
    } else if (filter === 'followings') {
      return cards.filter(card => followings[card.id] === true);
    } else {
      return cards;
    }
  };
  const Cards = filteredCards();

  return (
    <>
      <Wrapper>
        <StyledLink to="/">
          <Button type="Button">Back</Button>
        </StyledLink>
        <SelectWrapper>
          <StyledSelect value={filter} onChange={handleFilterChange}>
            <StyledOption value="all">Show All</StyledOption>
            <StyledOption value="follow">Follow</StyledOption>
            <StyledOption value="followings">Followings</StyledOption>
          </StyledSelect>
        </SelectWrapper>
      </Wrapper>
      <List>
        {Cards.map(card => (
          <CardItem
            key={card.id}
            id={card.id}
            user={card.user}
            tweets={card.tweets}
            followers={card.followers}
            avatar={card.avatar}
            onCardAction={handleCardAction}
          />
        ))}
      </List>
    </>
  );
};

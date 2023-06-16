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
  const [followings, setFollowings] = useState([]);
  const [follow, setFollow] = useState([]);
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleCardAction = cardId => {
    if (followings.includes(cardId)) {
      setFollowings(prevState => prevState.filter(id => id !== cardId));
    } else if (!followings.includes(cardId)) {
      setFollow(prevState => prevState.filter(id => id !== cardId));
      setFollowings(prevState => [...prevState, cardId]);
    } else {
      setFollowings(prevState => [...prevState, cardId]);
    }
  };

  const filteredCards = cards.filter(card => {
    if (filter === 'follow') {
      return follow.includes(card.id);
    } else if (filter === 'followings') {
      return followings.includes(card.id);
    }
    return true;
  });

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
        {filteredCards.map(card => (
          <CardItem
            key={card.id}
            id={card.id}
            user={card.user}
            tweets={card.tweets}
            followers={card.followers}
            avatar={card.avatar}
            isFollowing={followings.includes(card.id)}
            onCardAction={handleCardAction}
          />
        ))}
      </List>
    </>
  );
};

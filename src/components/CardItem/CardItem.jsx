import React, { useState } from 'react';
import {
  Wrapper,
  Logo,
  Question,
  Frame,
  User,
  Tweets,
  Followers,
  Button,
} from './CardItem.styled';
import question from '../../image/question.png';
import line from '../../image/line.png';
import frame from '../../image/frame.png';
import logo from '../../image/logo.png';

export const CardItem = ({ id, user, tweets, followers, avatar }) => {
  const [isFollowing, setIsFollowing] = useState(
    () => localStorage.getItem(`following_${id}`) === 'true'
  );

  const handleButtonClick = () => {
    setIsFollowing(prevState => !prevState);

    if (!isFollowing) {
      localStorage.setItem(`following_${id}`, 'true');
    } else {
      localStorage.removeItem(`following_${id}`);
    }
  };

  const formattedFollowersCount = isFollowing
    ? (followers * 10000 + 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : (followers * 10000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <Question src={question} alt="question" width={308} height={168} />
      <img src={line} alt="line" />
      <Frame src={frame} alt="frame" width={80} height={80} />
      <User src={avatar} alt="user" width={53} height={53} />
      <Tweets>{tweets} Tweets</Tweets>
      <Followers>{formattedFollowersCount} Followers</Followers>
      <Button
        type="button"
        onClick={handleButtonClick}
        background={isFollowing}
        isFollowing={isFollowing}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </Wrapper>
  );
};

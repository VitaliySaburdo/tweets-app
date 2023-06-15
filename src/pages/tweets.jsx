import React, { useEffect, useState } from 'react';
import { ApiService } from '../ApiService/ApiService';
import { CardList } from '../components/CardList/CardList';
import { Section } from '../components/Section/Section';
import { Button } from '../components/Button/Button';
import { Container } from '../components/Container/Container';
import { Loader } from '../components/Loader/Loader';
import * as Scroll from 'react-scroll';

const Tweets = () => {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(() => localStorage.getItem('limit') ?? 3);
  const [reachedEnd, setReachedEnd] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    async function APIfetchImages() {
      try {
        setIsLoading(true);
        const data = await ApiService(limit);
        setItems(data);
        if (data.length >= 12) {
          setReachedEnd(false);
        } else {
          setReachedEnd(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        setIsFirstRender(false);
      }
    }
    APIfetchImages();
  }, [limit]);

  const LoadMore = () => {
    const newLimit = limit + 3;
    setLimit(newLimit);
    localStorage.setItem('limit', newLimit.toString());
    scrolling();
  };

  function scrolling() {
    const scroll = Scroll.animateScroll;
    scroll.scrollMore(650);
  }

  return (
    <Section>
      <Container>
        <CardList cards={items} />
        {isLoading ? (
          <Loader />
        ) : (
          !isFirstRender &&
          reachedEnd && (
            <Button style={{ margin: '0 auto' }} onClick={LoadMore}>
              Load More
            </Button>
          )
        )}
      </Container>
    </Section>
  );
};

export default Tweets;

import React, { useEffect, useState } from 'react';
import Grid from 'ustudio-ui/components/Grid';
import Cell from 'ustudio-ui/components/Grid/Cell';
import Placeholder from 'ustudio-ui/components/Placeholder';
import Styled from './loading-screen.styles';

const LoadingScreen: React.FC<{ isLoaded: boolean }> = ({ isLoaded }) => {
  const [isRendering, setRendering] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => setRendering(false), 300);
    }

    setRendering(true);

    return () => setRendering(false);
  }, [isLoaded]);

  return isRendering ? (
    <Styled.Wrapper isLoaded={isLoaded}>
      <Grid isContainer>
        <Cell
          md={{ size: 10, offset: { before: 1, after: 1 } }}
          lg={{ size: 10, offset: { before: 2, after: 2 } }}
          xl={{ size: 10, offset: { before: 3, after: 3 } }}
        >
          <Styled.LargeContainer>
            <Styled.InlineContainer>
              <Placeholder variant="text" appearance={{ height: 'small', width: '66%' }} />
            </Styled.InlineContainer>

            <Placeholder variant="text" appearance={{ height: 'h1', width: '50%' }} />

            <Styled.MediumContainer>
              <Placeholder variant="text" appearance={{ height: 'h2', width: '45%' }} />

              <Placeholder variant="text" appearance={{ width: '66%' }} />
              <Placeholder variant="text" appearance={{ width: '75%' }} />
            </Styled.MediumContainer>

            <Styled.MediumContainer>
              <Styled.InlineContainer>
                <Placeholder variant="text" appearance={{ width: '50%' }} />
                <Placeholder variant="text" appearance={{ width: '33%' }} />
              </Styled.InlineContainer>

              <Placeholder variant="text" appearance={{ width: '75%' }} />
              <Placeholder variant="text" appearance={{ width: '50%' }} />
              <Placeholder variant="text" appearance={{ width: '66%' }} />
            </Styled.MediumContainer>

            <Styled.MediumContainer>
              <Placeholder variant="text" appearance={{ width: '33%' }} />
              <Placeholder variant="text" appearance={{ width: '50%' }} />

              <Placeholder variant="text" appearance={{ height: 'h2', width: '45%' }} />

              <Styled.InlineContainer>
                <Placeholder variant="text" appearance={{ width: '50%' }} />
                <Placeholder variant="text" appearance={{ width: '66%' }} />
                <Placeholder variant="text" appearance={{ width: '75%' }} />
              </Styled.InlineContainer>
            </Styled.MediumContainer>
          </Styled.LargeContainer>
        </Cell>
      </Grid>
    </Styled.Wrapper>
  ) : null;
};

export default LoadingScreen;

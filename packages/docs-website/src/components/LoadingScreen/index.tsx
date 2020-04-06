import React, { useEffect, useState } from 'react';
import { Placeholder } from 'ustudio-ui';
import Styled from './style';

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
    <Styled.LargeContainer isLoaded={isLoaded}>
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
  ) : null;
};

export default LoadingScreen;

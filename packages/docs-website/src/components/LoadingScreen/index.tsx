import React from 'react';
import Styled from './style';

const LoadingScreen: React.FC<{ isLoaded: boolean }> = ({ isLoaded }) => {
  return (
    <Styled.LoadingScreen isLoaded={isLoaded}>
      <Styled.Logo />
    </Styled.LoadingScreen>
  );
};

export default LoadingScreen;

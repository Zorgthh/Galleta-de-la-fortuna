import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -2;
`;

const Background = ({ backgroundImage }) => {
  return <BackgroundContainer style={{ backgroundImage: `url(${backgroundImage})` }} />;
};

export default Background;

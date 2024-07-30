import React from 'react';
import styled from 'styled-components';

const DisplayContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  max-width: 600px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Phrase = styled.p`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #333;
`;

const Author = styled.small`
  font-size: 1rem;
  color: #666;
`;

const FortuneDisplay = ({ phrase, author }) => {
  return (
    <DisplayContainer>
      <Phrase>{phrase}</Phrase>
      <Author>- {author}</Author>
    </DisplayContainer>
  );
};

export default FortuneDisplay;

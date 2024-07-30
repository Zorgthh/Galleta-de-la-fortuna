import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 15px 30px;
  font-size: 1rem;
  margin-top: 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Cambiar Frase y Fondo</StyledButton>;
};

export default Button;


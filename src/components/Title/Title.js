import React from 'react';
import styled, { css } from 'styled-components';

const Title = styled.h1`
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => size || '22px'};
  color: ${({ color }) => color || 'white'};
`;

export default Title;

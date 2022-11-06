import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'IBM Plex Mono', monospace;
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => size || '22px'};
  color: ${({ color }) => color || 'white'};
  width: ${({ width }) => width || '600px'};
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 42px;
    width: 300px;
    margin: 0;
    left: 0;
    margin: 0;
  }
`;

export default Title;

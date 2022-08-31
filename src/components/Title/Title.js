import styled from 'styled-components';

const Title = styled.h1`
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => size || '22px'};
  color: ${({ color }) => color || 'white'};
  @media (max-width: 768px) {
    font-size: 32px;
    width: 360px;
    margin: 0;
  }
`;

export default Title;

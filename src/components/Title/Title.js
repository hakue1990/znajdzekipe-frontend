import styled from 'styled-components';

const Title = styled.h1`
  margin: ${({ margin }) => margin};
  font-size: ${({ size }) => size || '22px'};
  color: ${({ color }) => color || 'white'};
  width: 600px;
  @media (max-width: 768px) {
    font-size: 32px;
    width: 300px;
    margin: 0;
    left: 0;
    margin: 0;
  }
`;

export default Title;

import styled from 'styled-components';

const Button = styled.button`
margin: ${({ margin }) => margin};
  background-color: #f6ae2d;
  border-radius: 18px;
  border-style: none;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  flex-shrink: 0;
  font-family: 'Inter UI', 'SF Pro Display', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 14px;
  font-weight: 700;
  padding: 15px 20px;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: 0.1s;
  }
  @media (min-width: 768px) {
    .button-36 {
      padding: 0 2.6rem;
    }
  }
`;

export default Button;

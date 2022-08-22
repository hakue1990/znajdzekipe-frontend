import styled, { css } from 'styled-components';
import ThreeHeadImg from '../../../assets/images/3headsImg.png';
import Title from '../../../components/Title/Title';
import OkIco from '../../../components/OkIco/OkIco';

const ThreeHeadSection = () => (
  <>
    <Container>
      <Row black>
        <img src={ThreeHeadImg} alt='3 heads Image' />
      </Row>
      <Row black column>
        <Title size='48px' margin='22px'>
          co <span style={{ color: '#F6AE2D' }}>trzy głowy</span> to nie{' '}
          <span style={{ color: '#F6AE2D' }}>jedna</span>
        </Title>
        <p style={{ width: '70%' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          fugiat tempore, dolor possimus iste sunt quas sequi inventore eligendi
          perspiciatis asperiores. Esse voluptate neque voluptatem eos!
          Quibusdam et in possimus sunt repudiandae at modi, explicabo magni
          voluptate corrupti placeat accusantium.
        </p>
        <OkIco text='poznaj przyjaciół' />
        <OkIco text='razem możesz więcej' />
        <OkIco text='z ekipą nie ma nudy!' />
      </Row>
    </Container>
  </>
);

export default ThreeHeadSection;

const Container = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;

const Row = styled.div`
  width: ${({ width }) => width || '50%'};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 52px;
    overflow: hidden;

    img {
      width: 350px;
    }
  }

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
  ${(props) =>
    props.black &&
    css`
      background-color: black;
    `}
`;

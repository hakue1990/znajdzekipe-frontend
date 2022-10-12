import ImageSlider from './ImageSlider/ImageSlider';
import styled from 'styled-components';
import Title from '../Title/Title';

import footballImage from '../../assets/images/slider/footballImg.webp';
import pubImage from '../../assets/images/slider/pubImg.webp';
import chessImage from '../../assets/images/slider/chessImg.webp';
import cofeeImage from '../../assets/images/slider/coffeeImg.webp';
import singImage from '../../assets/images/slider/sing.webp';
import BG from '../../assets/images/BG.png';

const Slides = () => {
  const slides = [
    { url: singImage, title: 'Sing' },
    { url: pubImage, title: 'Pub' },
    { url: footballImage, title: 'Football' },
    { url: chessImage, title: 'Chess' },
    { url: cofeeImage, title: 'Beach' },
  ];

  const SectionContainer = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-image: url(${BG});
    background-color: #000;
  `;

  const ImagesWrapper = styled.div`
    width: 720px;
    height: 403px;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: 100vw;
    }
  `;

  const SlidesTitle = styled(Title)`
    @media (max-width: 768px) {
      font-size: 28px;
      margin: 20px;
    }
  `;

  return (
    <SectionContainer>
      <SlidesTitle color='white' size='30px' margin='40px 0'>
        Znajdz Ekipe do!
      </SlidesTitle>
      <ImagesWrapper>
        <ImageSlider slides={slides} />
      </ImagesWrapper>
    </SectionContainer>
  );
};

export default Slides;

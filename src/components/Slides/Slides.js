import ImageSlider from './ImageSlider/ImageSlider';
import styled from 'styled-components';
import Title from '../Title/Title';

const Slides = () => {
  const slides = [
    { url: 'https://picsum.photos/id/237/200/300', title: 'Dog' },
    { url: 'https://picsum.photos/id/217/200/300', title: 'Lake' },
    { url: 'https://picsum.photos/id/257/200/300', title: 'Canal' },
    { url: 'https://picsum.photos/id/267/200/300', title: 'Beach' },
    { url: 'https://picsum.photos/id/287/200/300', title: 'Mountain' },
  ];

  const SectionContainer = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  const ImagesWrapper = styled.div`
    width: 600px;
    height: 336px;
    margin: 0 auto;
  `;

  return (
    <SectionContainer>
      <Title color='black' size='40px' margin='40px 0'>
        Znajdz Ekipe do!
      </Title>
      <ImagesWrapper>
        <ImageSlider slides={slides} />
      </ImagesWrapper>
    </SectionContainer>
  );
};

export default Slides;

// const slidesContainer = styled.div`
// width: '500px';
// height: '280px';
// margin: '0 auto';
// `;

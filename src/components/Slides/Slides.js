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
  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto',
  };

  const SlidesContainer = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
  `;

  return (
    <SlidesContainer>
      <Title color='black' size='40px' margin='20px 0'>
        Znajdz Ekipe do!
      </Title>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </SlidesContainer>
  );
};

export default Slides;

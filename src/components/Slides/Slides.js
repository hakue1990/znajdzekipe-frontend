import ImageSlider from './ImageSlider/ImageSlider';

const Slides = () => {
  const slides = [
    { url: 'https://picsum.photos/id/237/200/300', title: 'Beach' },
    { url: 'https://picsum.photos/id/217/200/300', title: 'Forest' },
    { url: 'https://picsum.photos/id/257/200/300', title: 'Citry' },
    { url: 'https://picsum.photos/id/267/200/300', title: 'Italy' },
    { url: 'https://picsum.photos/id/217/200/300', title: 'Żaba' },
  ];
  return (
    <div>
      <h1>siema lekcja slider</h1>
      <div>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Slides;

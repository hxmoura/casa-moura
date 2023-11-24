import Container from '@/components/Container';
// import Image from 'next/image';
// import As from './image.png';

export default function Carousel() {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const images = ['./card-1.png', './card-2.png', './card-3.png'];

  // const nextImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const previousImage = () => {
  //   setCurrentImageIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length,
  //   );
  // };

  // const image = './image.png';

  return (
    <Container noPadding>
      <img
        src="https://cdn.pixabay.com/photo/2023/09/14/19/14/landscape-8253576_1280.jpg"
        className="w-full h-[300px] md:h-[400px] lg:rounded-md lg:mt-12"
        alt="Imagem"
      />
    </Container>
  );
}

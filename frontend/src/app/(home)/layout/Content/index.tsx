'use client';

import Container from '@/components/Container';

import Carousel from './Carousel';
import Informations from './Informations';
import Departaments from './Departaments';
import Promotions from './Promotions';
import Highlights from './Highlights';
import Blog from './Blog';
import SeeToo from './SeeToo';

export default function Content() {
  return (
    <main>
      <Carousel />
      <Container>
        <Informations />
        <Departaments />
        <Promotions />
        <Highlights />
        <Blog />
        <SeeToo />
      </Container>
    </main>
  );
}

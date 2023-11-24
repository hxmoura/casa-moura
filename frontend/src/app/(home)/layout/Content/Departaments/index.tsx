import { Icon } from '@iconify/react';
import Card from './Card';
import SectionTitle from '@/components/SectionTitle';

import Scroll from '@/components/Scroll';
import useScroll from '@/components/Scroll/useScroll';

export default function Departaments() {
  const { handleMouseLeft, handleMouseRight, getScrollReference } = useScroll();

  return (
    <section className="mt-20">
      <div className="flex justify-between items-center mb-7">
        <SectionTitle>Navegue por departamentos</SectionTitle>
        <div className="flex gap-2">
          <button
            onClick={handleMouseLeft}
            className="bg-background-light rounded-full p-1"
          >
            <Icon className="w-5 h-5" icon="heroicons:arrow-left" />
          </button>
          <button
            onClick={handleMouseRight}
            className="bg-brand-secondary rounded-full p-1"
          >
            <Icon className="w-5 h-5 text-white" icon="heroicons:arrow-right" />
          </button>
        </div>
      </div>

      <Scroll setScrollRef={getScrollReference}>
        <Card
          icon="material-symbols:energy-savings-leaf"
          label="Materiais elétricos"
          link="https://google.com"
        />
        <Card
          icon="mingcute:tool-fill"
          label="Ferramentas"
          link="https://google.com"
        />
        <Card
          icon="mdi:screw-flat-top"
          label="Ferragens"
          link="https://google.com"
        />
        <Card
          icon="mdi:pipe-valve"
          label="Materiais hidráulicos"
          link="https://google.com"
        />
        <Card
          icon="ic:baseline-lightbulb"
          label="Iluminação"
          link="https://google.com"
        />
        <Card
          icon="fa6-solid:shower"
          label="Duchas e chuveiros"
          link="http://localhost:3000"
        />
        <Card
          icon="ri:door-lock-fill"
          label="Segurança"
          link="http://localhost:3000"
        />
        <Card
          icon="game-icons:paint-bucket"
          label="Pintura"
          link="http://localhost:3000"
        />
        <Card
          icon="clarity:tools-solid"
          label="Equipamentos"
          link="http://localhost:3000"
        />
        <Card
          icon="ic:round-pan-tool"
          label="Sinalização"
          link="http://localhost:3000"
        />
      </Scroll>
    </section>
  );
}

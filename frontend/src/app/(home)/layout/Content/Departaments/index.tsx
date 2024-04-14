"use client";

import Container from "@/components/Container";
import ScrollContainer from "@/components/Scroll/ScrollContainer";
import SectionTitle from "@/components/SectionTitle";
import Card from "./Card";
import { departament } from "@/app/(home)/types/departament";

interface DepartamentsProps {
  departaments: departament[];
}

export default function Departaments({ departaments }: DepartamentsProps) {
  return (
    <section className="mt-20">
      <Container>
        <div className="relative">
          <SectionTitle>Navegue por departamentos</SectionTitle>
          <ScrollContainer type="fixed" spacing={50}>
            {departaments.map((departament, index) => (
              <Card
                key={index}
                icon={departament.icon}
                label={departament.name}
                link={departament.link}
              />
            ))}
          </ScrollContainer>
        </div>
      </Container>
    </section>
  );
}

"use client";

import Container from "@/components/Container";
import ScrollContainer from "@/components/Scroll/ScrollContainer";
import SectionTitle from "@/components/SectionTitle";
import Card from "./Card";
import { Departament } from "@/types/departament";

interface DepartamentsProps {
  departaments: Departament[];
}

export default function Departaments({ departaments }: DepartamentsProps) {
  return (
    <>
      {departaments.length > 0 && (
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
                    link={departament.slug}
                  />
                ))}
              </ScrollContainer>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

"use client";

import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { Icon } from "@iconify/react";
import { RefObject, createRef, useState } from "react";
import useAnimatedUnmount from "@/hooks/useAnimatedEnd";
import DepartamentsMobile from "./Components/Departaments/DepartamentsMobile";
import { departaments } from "./TypeDepartaments";
import DepartamentsDesktop from "./Components/Departaments/DepartamentsDesktop";
import Cart from "./Components/Cart";
import useDepartaments from "./hooks/useDepartaments";

interface CartRef {
  handleCart: () => void;
}

export default function Header() {
  const departaments: departaments[] = [
    {
      name: "Materiais elétricos",
      icon: "jhashdahsd",
      url: "/eletricos",
      categories: [
        { name: "Lampadas", url: "/lampadas" },
        { name: "Tomadas e extensões", url: "/tomadas" },
        { name: "Cabos e fios", url: "/cabos" },
        { name: "Chuveiros e duchas", url: "/duchas" },
        { name: "Lampadas", url: "/lampadas" },
        { name: "Tomadas e extensões", url: "/tomadas" },
        { name: "Cabos e fios", url: "/cabos" },
        { name: "Chuveiros e duchas", url: "/duchas" },
        { name: "Lampadas", url: "/lampadas" },
        { name: "Tomadas e extensões", url: "/tomadas" },
        { name: "Cabos e fios", url: "/cabos" },
        { name: "Chuveiros e duchas", url: "/duchas" },
        { name: "Lampadas", url: "/lampadas" },
        { name: "Tomadas e extensões", url: "/tomadas" },
        { name: "Cabos e fios", url: "/cabos" },
        { name: "Chuveiros e duchas", url: "/duchas" },
        { name: "Lampadas", url: "/lampadas" },
        { name: "Tomadas e extensões", url: "/tomadas" },
        { name: "Cabos e fios", url: "/cabos" },
        { name: "Chuveiros e duchas", url: "/duchas" },
        { name: "Lampadas", url: "/lampadas" },
        { name: "Tomadas e extensões", url: "/tomadas" },
        { name: "Cabos e fios", url: "/cabos" },
        { name: "Chuveiros e duchas", url: "/duchas" },
        { name: "Lampadas", url: "/lampadas" },
        { name: "Tomadas e extensões", url: "/tomadas" },
        { name: "Cabos e fios", url: "/cabos" },
        { name: "Chuveiros e duchas", url: "/duchas" },
      ],
    },
    {
      name: "Ferramentas",
      icon: "jhashdahsd",
      url: "/hidraulicos",
      categories: [
        { name: "afdsgdsdf", url: "/lampadas" },
        { name: "asdsgsgwrasf e extensões", url: "/tomadas" },
        { name: "Cabos e dfasdtzca", url: "/cabos" },
        { name: "amogjohojewt e duchas", url: "/duchas" },
      ],
    },
    {
      name: "Ferragens",
      icon: "jhashdahsd",
      url: "/ferramentas",
      categories: [
        { name: "sdgyyuyggh", url: "/lampadas" },
        { name: "qeasdasf e extensões", url: "/tomadas" },
        { name: "llhjkghj e fios", url: "/cabos" },
        { name: "rsrsfvsdhsg e duchas", url: "/duchas" },
      ],
    },
    {
      name: "Materiais hidráulicos",
      icon: "jhashdahsd",
      url: "/ferragens",
      categories: [
        { name: "sqdfjhdedtetg", url: "/lampadas" },
        { name: "sfdhethdgesrdg e extensões", url: "/tomadas" },
        { name: "Cabos e fios", url: "/cabos" },
        { name: "sdtgwertyg e duchas", url: "/duchas" },
      ],
    },
    {
      name: "Iluminação",
      icon: "jhashdahsd",
      url: "/seguranca",
      categories: [
        { name: "srgheurujegh", url: "/lampadas" },
        { name: "asdgtsyartf e extensões", url: "/tomadas" },
        { name: "asdaetgaf e fios", url: "/cabos" },
        { name: "aetatstsrsar e duchas", url: "/duchas" },
      ],
    },
    {
      name: "Duchas e chuveiros",
      icon: "jhashdahsd",
      url: "/seguranca",
      categories: [
        { name: "srgheurujegh", url: "/lampadas" },
        { name: "asdgtsyartf e extensões", url: "/tomadas" },
        { name: "asdaetgaf e fios", url: "/cabos" },
        { name: "aetatstsrsar e duchas", url: "/duchas" },
      ],
    },
    {
      name: "Segurança",
      icon: "jhashdahsd",
      url: "/seguranca",
      categories: [
        { name: "srgheurujegh", url: "/lampadas" },
        { name: "asdgtsyartf e extensões", url: "/tomadas" },
        { name: "asdaetgaf e fios", url: "/cabos" },
        { name: "aetatstsrsar e duchas", url: "/duchas" },
      ],
    },
    {
      name: "Pintura",
      icon: "jhashdahsd",
      url: "/seguranca",
      categories: [
        { name: "srgheurujegh", url: "/lampadas" },
        { name: "asdgtsyartf e extensões", url: "/tomadas" },
        { name: "asdaetgaf e fios", url: "/cabos" },
        { name: "aetatstsrsar e duchas", url: "/duchas" },
      ],
    },
    {
      name: "Equipamentos",
      icon: "jhashdahsd",
      url: "/seguranca",
      categories: [
        { name: "srgheurujegh", url: "/lampadas" },
        { name: "asdgtsyartf e extensões", url: "/tomadas" },
        { name: "asdaetgaf e fios", url: "/cabos" },
        { name: "aetatstsrsar e duchas", url: "/duchas" },
      ],
    },
    {
      name: "Sinalização",
      icon: "jhashdahsd",
      url: "/seguranca",
      categories: [
        { name: "srgheurujegh", url: "/lampadas" },
        { name: "asdgtsyartf e extensões", url: "/tomadas" },
        { name: "asdaetgaf e fios", url: "/cabos" },
        { name: "aetatstsrsar e duchas", url: "/duchas" },
      ],
    },
  ];

  const {
    handleMobileMenu,
    handleMobileBgMenu,
    openMobileMenu,
    handleMenu,
    setOpenDepartaments,
    openDepartaments,
    selectedDepartament,
    setSelectedDepartament,
    setOpenMobileMenu,
  } = useDepartaments();

  const cartRef: RefObject<CartRef> = createRef();
  const { animatedElementRef, shouldRender } =
    useAnimatedUnmount(openMobileMenu);

  return (
    <header className="h-[120px] lg:h-[150px] bg-brand-primary">
      <Cart ref={cartRef} />

      <Container>
        <div className="flex flex-col justify-center h-full gap-8 py-4">
          <section className="flex justify-between items-start lg:items-center h-full lg:h-auto relative">
            <div className="flex gap-4">
              <button
                className="text-white lg:hidden"
                onClick={handleMobileMenu}
              >
                <Icon icon="heroicons-outline:menu" className="w-7 h-7" />
              </button>
              <Logo link />
            </div>
            <form className="w-full lg:mx-24 flex absolute lg:static bottom-0 h-10 lg:h-11">
              <input
                type="text"
                className="w-full outline-none rounded-l px-5 py-3 text-xs lg:text-sm"
                placeholder="Pesquise pelo produto"
              />
              <div className="bg-white rounded-r p-1">
                <button className="bg-brand-secondary text-white rounded h-full w-[37px] flex items-center justify-center">
                  <Icon
                    icon="heroicons:magnifying-glass-16-solid"
                    className="w-7 h-7"
                  />
                </button>
              </div>
            </form>
            <div className="flex gap-3 lg:gap-5">
              <button className="lg:w-9 lg:h-9" title="Lojas físicas">
                <a href="#" className="text-white">
                  <Icon
                    className="w-7 h-7 lg:w-8 lg:h-8 lg:hover:w-9 lg:hover:h-9 transition-all"
                    icon="lucide:map-pin"
                  />
                </a>
              </button>
              <button className="lg:w-9 lg:h-9" title="Conta">
                <a href="#" className="text-white">
                  <Icon
                    className="w-7 h-7 lg:w-8 lg:h-8 lg:hover:w-9 lg:hover:h-9 transition-all"
                    icon="lucide:user"
                  />
                </a>
              </button>
              <button
                className="text-white lg:w-9 lg:h-9 relative"
                title="Carrinho"
                onClick={() => cartRef.current?.handleCart()}
              >
                <div className="bg-brand-secondary w-3 h-3 lg:w-4 lg:h-4 rounded-full absolute top-0 -right-1"></div>
                <Icon
                  className="w-7 h-7 lg:w-8 lg:h-8 lg:hover:w-9 lg:hover:h-9 transition-all"
                  icon="lucide:shopping-cart"
                />
              </button>
            </div>
          </section>
          <section
            className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 z-40 lg:static lg:bg-transparent ${shouldRender ? "block" : "hidden"} lg:block`}
            onClick={handleMobileBgMenu}
          >
            <div
              ref={animatedElementRef}
              className={`bg-white lg:bg-transparent w-11/12 h-full animate-entryLeftSide-200 ${!openMobileMenu && "animate-exitLeftSide-200"} lg:animate-entryLeftSide-200`}
            >
              <header className="bg-brand-primary p-3 min-h-[60px] flex justify-between items-center lg:hidden">
                <strong className="text-white text-base font-medium">
                  Explorar
                </strong>
                <button
                  className="flex gap-2 items-center"
                  onClick={() => setOpenMobileMenu(false)}
                >
                  <Icon
                    icon="heroicons:x-mark"
                    className="w-5 h-5 text-white"
                  />
                </button>
              </header>
              <nav className="p-3 lg:p-0">
                <ul className="lg:flex items-center gap-10">
                  <li
                    className="relative z-30 border-b border-background-softLight p-3 lg:p-0 lg:border-none"
                    onMouseEnter={handleMenu}
                    onMouseLeave={handleMenu}
                  >
                    <button
                      className="flex justify-between items-center gap-3 w-full"
                      onClick={() =>
                        setOpenDepartaments((prevState) => !prevState)
                      }
                    >
                      <Icon
                        icon="heroicons-outline:menu"
                        className="w-5 h-5 hidden lg:block text-white"
                      />
                      <span className="lg:text-white text-xs lg:text-sm">
                        Departamentos
                      </span>
                      <Icon
                        icon="heroicons:chevron-right-20-solid"
                        className="w-4 h-4 lg:hidden"
                      />
                    </button>
                    <DepartamentsDesktop
                      openDepartaments={openDepartaments}
                      departaments={departaments}
                      selectedDepartament={selectedDepartament}
                      setSelectedDepartament={setSelectedDepartament}
                    />

                    <DepartamentsMobile
                      openDepartaments={openDepartaments}
                      setOpenDepartaments={setOpenDepartaments}
                      departaments={departaments}
                      setSelectedDepartament={setSelectedDepartament}
                      selectedDepartament={selectedDepartament}
                    />
                  </li>
                  <li className="border-b border-background-softLight p-3 lg:p-0 lg:border-none">
                    <a href="#" className="lg:text-white text-xs lg:text-sm">
                      Promoções do dia
                    </a>
                  </li>
                  <li className="border-b border-background-softLight p-3 lg:p-0 lg:border-none">
                    <a href="#" className="lg:text-white text-xs lg:text-sm">
                      Cupons
                    </a>
                  </li>
                  <li className="border-b border-background-softLight p-3 lg:p-0 lg:border-none">
                    <a href="#" className="lg:text-white text-xs lg:text-sm">
                      Serviços
                    </a>
                  </li>
                  <li className="border-b border-background-softLight p-3 lg:p-0 lg:border-none">
                    <a href="#" className="lg:text-white text-xs lg:text-sm">
                      Dicas
                    </a>
                  </li>
                  <li className="border-b border-background-softLight p-3 lg:p-0 lg:border-none">
                    <a href="#" className="lg:text-white text-xs lg:text-sm">
                      Suporte
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </div>
      </Container>
    </header>
  );
}

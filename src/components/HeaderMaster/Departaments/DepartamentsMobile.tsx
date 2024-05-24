import { Icon } from "@iconify/react";
import React, { Dispatch, SetStateAction } from "react";
import useAnimatedUnmount from "@/hooks/useAnimatedEnd";
import { Departament } from "@/types/departament";

interface DepartamentsMobileProps {
  openDepartaments: boolean;
  setOpenDepartaments: Dispatch<SetStateAction<boolean>>;
  departaments: Departament[];
  setSelectedDepartament: Dispatch<SetStateAction<string | null>>;
  selectedDepartament: string | null;
}

export default function DepartamentsMobile({
  openDepartaments,
  setOpenDepartaments,
  departaments,
  setSelectedDepartament,
  selectedDepartament,
}: DepartamentsMobileProps) {
  const { animatedElementRef, shouldRender } =
    useAnimatedUnmount(openDepartaments);

  return (
    <>
      {shouldRender && (
        <div
          ref={animatedElementRef}
          className={`lg:hidden fixed top-0 bottom-0 left-0 w-full flex flex-col animate-entryLeftSide-200 ${!openDepartaments && "animate-exitLeftSide-200"}`}
        >
          <header className="bg-brand-primary p-3 min-h-[60px] flex items-center">
            <button
              className="flex gap-2 items-center"
              onClick={() => setOpenDepartaments(false)}
            >
              <Icon
                icon="heroicons:arrow-left"
                className="w-4 h-4 text-white"
              />
              <p className="text-white text-xs font-medium">Voltar</p>
            </button>
          </header>
          <nav className="bg-white p-3 flex-grow overflow-y-auto">
            <ul className="gap-1">
              {departaments.map((departament, index) => (
                <li
                  key={index}
                  className="h-10 border-b border-background-softLight"
                >
                  <a
                    href="#"
                    className="p-3 rounded-[4px] text-xs flex justify-between"
                  >
                    <span>{departament.name}</span>
                    <Icon
                      icon="heroicons:chevron-right-20-solid"
                      className="text-text-light w-4 h-4"
                      onClick={() => setSelectedDepartament(departament.name)}
                    />
                  </a>

                  {selectedDepartament === departament.name && (
                    <div
                      className={`fixed top-0 bottom-0 left-0 w-full flex flex-col animate-entryLeftSide-200`}
                    >
                      <header className="bg-brand-primary p-3 min-h-[60px] flex items-center">
                        <button
                          className="flex gap-2 items-center"
                          onClick={() => setSelectedDepartament(null)}
                        >
                          <Icon
                            icon="heroicons:arrow-left"
                            className="w-4 h-4 text-white"
                          />
                          <p className="text-white text-xs font-medium">
                            Voltar
                          </p>
                        </button>
                      </header>
                      <nav className="bg-white p-3 flex-grow overflow-y-auto">
                        <ul className="gap-1">
                          {departament.categories.map((category, index) => (
                            <li
                              key={index}
                              className="h-10 border-b border-background-softLight"
                            >
                              <a
                                href={category.link}
                                className="p-3 rounded-[4px] text-xs flex justify-between"
                              >
                                {category.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

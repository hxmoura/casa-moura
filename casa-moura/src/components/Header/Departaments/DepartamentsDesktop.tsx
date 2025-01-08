import { Departament } from "@/types/departament";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

interface DepartamentsMobileProps {
  openDepartaments: boolean;
  departaments: Departament[];
  selectedDepartament: string | null;
  setSelectedDepartament: Dispatch<SetStateAction<string | null>>;
}

export default function DepartamentsDesktop({
  openDepartaments,
  departaments,
  selectedDepartament,
  setSelectedDepartament,
}: DepartamentsMobileProps) {
  function formatDepartamentName(departament: string) {
    const transform = departament
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const textoTransformado = transform.replace(/\s+/g, "-");
    return textoTransformado.toLowerCase();
  }

  return (
    <>
      {openDepartaments && (
        <>
          <div className="hidden lg:block w-full h-7 absolute"></div>
          <nav className="hidden lg:block absolute bg-white shadow-md h-80 w-[230px] left-0 top-full translate-y-7">
            <ul className="h-full overflow-y-scroll">
              {departaments.map((departament, index) => (
                <li key={index}>
                  <Link
                    href={`/departament/${formatDepartamentName(departament.name)}`}
                    onMouseEnter={() =>
                      setSelectedDepartament(departament.name)
                    }
                    className={`flex items-center justify-between hover:bg-brand-secondary px-4 py-3 hover:text-white transition-colors ${selectedDepartament === departament.name && "bg-brand-secondary text-white"}`}
                  >
                    <span className="text-sm">{departament.name}</span>
                    <Icon
                      icon="heroicons:chevron-right-20-solid"
                      className="w-5 h-5"
                    />
                  </Link>
                  {selectedDepartament === departament.name && (
                    <div
                      className={`absolute left-full h-full overflow-y-auto top-0 bg-white animate-expand shadow-md`}
                    >
                      <div className="sticky top-0 h-16 flex items-center bg-white p-7 z-30">
                        <h6 className="text-lg font-medium animate-fadeIn">
                          {departament.name}
                        </h6>
                      </div>
                      <ul className="grid grid-cols-2 gap-4 px-7 pb-7">
                        {departament.categories.map((category, index) => (
                          <li key={index}>
                            <Link
                              href={category.link}
                              className="text-sm hover:text-brand-secondary animate-fadeIn"
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

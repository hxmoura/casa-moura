import useScreenWidth from "@/hooks/useScreenWidth";
import { useState } from "react";

export default function useDepartaments() {
  const [openDepartaments, setOpenDepartaments] = useState<boolean>(false);
  const [selectedDepartament, setSelectedDepartament] = useState<string | null>(
    null,
  );

  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const { isDesktop } = useScreenWidth();

  function handleMenu() {
    if (isDesktop) {
      if (openDepartaments) {
        setOpenDepartaments(false);
        setSelectedDepartament(null);
      } else {
        setOpenDepartaments(true);
      }
    }
  }

  function handleMobileMenu() {
    if (openMobileMenu) {
      setOpenMobileMenu(false);
      setOpenDepartaments(false);
      setSelectedDepartament(null);
      document.body.style.overflow = "";
    } else {
      setOpenMobileMenu(true);
      document.body.style.overflow = "hidden";
    }
  }

  function handleMobileBgMenu(event: React.MouseEvent) {
    if (event.target === event.currentTarget) {
      setOpenMobileMenu((prevState) => !prevState);
      setOpenDepartaments(false);
      setSelectedDepartament(null);
      document.body.style.overflow = "";
    }
  }

  return {
    handleMobileMenu,
    handleMobileBgMenu,
    openMobileMenu,
    handleMenu,
    setOpenDepartaments,
    openDepartaments,
    selectedDepartament,
    setSelectedDepartament,
    setOpenMobileMenu,
  };
}

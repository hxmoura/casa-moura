"use client";

import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { Icon } from "@iconify/react";
import { useContext, useRef, useState } from "react";
import useAnimatedUnmount from "@/hooks/useAnimatedEnd";
import useDepartaments from "./hooks/useDepartaments";
import Link from "next/link";
import DepartamentsDesktop from "./Departaments/DepartamentsDesktop";
import DepartamentsMobile from "./Departaments/DepartamentsMobile";
import Cart from "../Cart";
import { CartContext } from "@/contexts/CartContext";
import getDepartaments from "@/api/queries/departaments";
import { useRouter } from "next/navigation";
import useFetcher from "@/hooks/useFetcher";
import SearchHistory from "./SearchHistory";
import { useUser } from "@/contexts/UserContext";
import { Departament } from "@/types/departament";

interface HeaderProps {
  type?: "full" | "short";
}

export default function Header({ type = "full" }: HeaderProps) {
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

  const { cart, handleCartOpening } = useContext(CartContext)!;
  const { animatedElementRef, shouldRender } =
    useAnimatedUnmount(openMobileMenu);

  const [inputSearch, setInputSearch] = useState<string>("");
  const router = useRouter();

  const { response: departaments } = useFetcher<Departament[]>(getDepartaments);

  const [showSearchHistory, setShowSearchHistory] = useState<boolean>(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchHistoryRef = useRef<HTMLDivElement>(null);

  const { user } = useUser();

  function handleSearch(evt: React.FormEvent) {
    evt.preventDefault();
    const searchValue = inputSearch.trim();

    if (searchValue) {
      router.push(`/search?q=${inputSearch}`);

      const getSearchHistory = localStorage.getItem("searchHistory");
      const newSearchHistory =
        getSearchHistory && Array.isArray(JSON.parse(getSearchHistory))
          ? JSON.parse(getSearchHistory)
          : [];
      newSearchHistory.push(inputSearch);
      localStorage.setItem(
        "searchHistory",
        JSON.stringify(newSearchHistory.slice(-5)),
      );

      searchInputRef.current?.blur();

      setShowSearchHistory(false);
      setInputSearch("");
      setSearchHistory((prev) => [...prev, inputSearch]);
    }
  }

  return (
    <>
      {type === "full" ? (
        <header className="h-[120px] lg:h-[150px] bg-brand-primary">
          <Cart />

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
                <form
                  className="w-full absolute lg:static bottom-0 h-10 lg:h-11 lg:mx-24"
                  onSubmit={handleSearch}
                >
                  <div className="relative flex w-full">
                    <input
                      type="text"
                      ref={searchInputRef}
                      className="w-full outline-none rounded-l px-5 py-3 text-xs lg:text-sm"
                      placeholder="Pesquise pelo produto"
                      onChange={(e) => setInputSearch(e.target.value)}
                      value={inputSearch}
                      onFocus={() => setShowSearchHistory(true)}
                    />
                    <div className="bg-white rounded-r p-1">
                      <button
                        className="bg-brand-secondary text-white rounded h-full w-[37px] flex items-center justify-center"
                        type="submit"
                      >
                        <Icon
                          icon="heroicons:magnifying-glass-16-solid"
                          className="w-7 h-7"
                        />
                      </button>
                    </div>
                    <SearchHistory
                      showSearchHistory={showSearchHistory}
                      searchHistory={searchHistory}
                      setSearchHistory={setSearchHistory}
                      setShowSearchHistory={setShowSearchHistory}
                      searchHistoryRef={searchHistoryRef}
                      searchInputRef={searchInputRef}
                    />
                  </div>
                </form>
                <div className="flex gap-3 lg:gap-5">
                  <button className="lg:w-9 lg:h-9" title="Lojas">
                    <Link href="#" className="text-white">
                      <Icon
                        className="w-7 h-7 lg:w-8 lg:h-8 lg:hover:w-9 lg:hover:h-9 transition-all"
                        icon="lucide:map-pin"
                      />
                    </Link>
                  </button>
                  <button className="lg:w-9 lg:h-9" title="Conta">
                    <Link
                      href={user ? "/user" : "/login"}
                      className="text-white"
                    >
                      <Icon
                        className="w-7 h-7 lg:w-8 lg:h-8 lg:hover:w-9 lg:hover:h-9 transition-all"
                        icon="lucide:user"
                      />
                    </Link>
                  </button>
                  <button
                    className="text-white lg:w-9 lg:h-9 relative group"
                    title="Carrinho"
                    onClick={handleCartOpening}
                  >
                    {cart.length > 0 && (
                      <div className="bg-brand-secondary w-3 h-3 lg:w-4 lg:h-4 rounded-full absolute top-0 -right-1 transition-all lg:group-hover:translate-x-1"></div>
                    )}
                    <Icon
                      className="w-7 h-7 lg:w-8 lg:h-8 lg:group-hover:w-9 lg:group-hover:h-9 transition-all"
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
                  className={`bg-white lg:bg-transparent w-11/12 h-full animate-entryLeft ${!openMobileMenu && "animate-exitLeft"} lg:animate-entryLeft`}
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
                          departaments={departaments?.data || []}
                          selectedDepartament={selectedDepartament}
                          setSelectedDepartament={setSelectedDepartament}
                        />

                        <DepartamentsMobile
                          openDepartaments={openDepartaments}
                          setOpenDepartaments={setOpenDepartaments}
                          departaments={departaments?.data || []}
                          setSelectedDepartament={setSelectedDepartament}
                          selectedDepartament={selectedDepartament}
                        />
                      </li>
                      <li className="border-b border-background-softLight p-3 lg:p-0 lg:border-none">
                        <Link
                          href="#"
                          className="lg:text-white text-xs lg:text-sm"
                        >
                          Promoções do dia
                        </Link>
                      </li>
                      <li className="border-b border-background-softLight p-3 lg:p-0 lg:border-none">
                        <Link
                          href="#"
                          className="lg:text-white text-xs lg:text-sm"
                        >
                          Cupons
                        </Link>
                      </li>
                      <li className="border-b border-background-softLight p-3 lg:p-0 lg:border-none">
                        <Link
                          href="#"
                          className="lg:text-white text-xs lg:text-sm"
                        >
                          Serviços
                        </Link>
                      </li>
                      <li className="border-b border-background-softLight p-3 lg:p-0 lg:border-none">
                        <Link
                          href="#"
                          className="lg:text-white text-xs lg:text-sm"
                        >
                          Dicas
                        </Link>
                      </li>
                      <li className="border-b border-background-softLight p-3 lg:p-0 lg:border-none">
                        <Link
                          href="#"
                          className="lg:text-white text-xs lg:text-sm"
                        >
                          Suporte
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </section>
            </div>
          </Container>
        </header>
      ) : (
        <header className="h-20 bg-brand-primary">
          <Container>
            <div className="flex items-center justify-between h-full">
              <Logo link />
              <div className="flex items-center gap-2 text-white">
                <Icon
                  icon="hugeicons:security-lock"
                  className="lg:w-7 lg:h-7 w-5 h-5"
                />
                <p className="font-medium lg:text-sm text-xs">
                  Ambiente seguro
                </p>
              </div>
            </div>
          </Container>
        </header>
      )}
    </>
  );
}

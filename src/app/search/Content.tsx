"use client";

import { getProducts } from "@/api/products";
import Container from "@/components/Container";
import Modal from "@/components/Modal";
import ModalHeader from "@/components/Modal/ModalHeader";
import ProductCard from "@/components/ProductCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useScreenWidth from "@/hooks/useScreenWidth";
import { Product } from "@/types/product";
import Filters from "./Filters";
import useFetcher from "../../hooks/useFetcher";

export default function Content() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";

  const { data: products } = useFetcher<Product[]>(getProducts);
  const [filterProductsBySearch, setFilterProductsBySearch] = useState<
    Product[]
  >([]);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  const [openModalFilters, setOpenModalFilters] = useState<boolean>(false);
  const { isDesktop } = useScreenWidth();

  function simplifyText(string: string) {
    return string
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  useEffect(() => {
    if (isDesktop) {
      setOpenModalFilters(false);
    }
  }, [isDesktop]);

  useEffect(() => {
    const filterBySearch =
      products?.filter((product) =>
        simplifyText(product.name).includes(simplifyText(search)),
      ) || [];

    setFilterProductsBySearch(filterBySearch);
  }, [products, search]);

  if (products && filterProductsBySearch.length <= 0) {
    return (
      <section className="flex flex-col justify-center items-center my-32 overflow-hidden">
        <Icon
          icon="tdesign:search-error"
          className="w-32 h-32 lg:w-40 lg:h-40 text-background-softLight"
        />
        <strong className="mt-7 font-semibold text-xl lg:text-xl text-center">
          Nenhum resultado foi encontrado para &quot;{search}&quot;
        </strong>
      </section>
    );
  }

  return (
    <main className="mb-28">
      <Container>
        <section className="flex justify-between mt-6 mb-7 lg:mt-16 lg:mb-12 overflow-hidden">
          <p className="text-text-light font-medium lg:font-semibold text-xs lg:text-xl ">
            Você pesquisou por &quot;{search}&quot;
          </p>
          <button
            className="lg:hidden flex items-center gap-1 border border-background-softLight rounded-sm px-2 py-1"
            onClick={() => setOpenModalFilters(true)}
          >
            <Icon icon="lucide:list-filter" className="w-4 h-4" />
            <span className="text-xs">Filtros</span>
          </button>
        </section>

        <div className="flex flex-col lg:flex-row gap-7">
          <div className="hidden lg:block">
            <Filters
              filteredProductsBySearch={filterProductsBySearch}
              setFilterProducts={setFilterProducts}
              setOpenModalFilters={setOpenModalFilters}
            />
          </div>
          <div className="absolute">
            <Modal
              openModal={openModalFilters}
              setOpenModal={setOpenModalFilters}
              position="left"
              className="w-11/12 h-full flex flex-col"
            >
              <ModalHeader
                label="Filtros"
                onClose={() => setOpenModalFilters(false)}
              />
              <div className="p-5 overflow-y-scroll flex-1">
                <Filters
                  filteredProductsBySearch={filterProductsBySearch}
                  setFilterProducts={setFilterProducts}
                  setOpenModalFilters={setOpenModalFilters}
                />
              </div>
            </Modal>
          </div>

          <section className="flex flex-wrap justify-center lg:justify-start gap-5">
            {filterProducts.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </section>
        </div>
      </Container>
    </main>
  );
}

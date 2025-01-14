"use client";

import { getProducts } from "@/api/queries/products";
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
import useFetcher from "@/hooks/useFetcher";
import Button from "@/components/Button";
import useQueryParams from "@/hooks/useQueryParams";
import Loading from "./loading";

export default function Content() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q") || "";
  const page = Number(searchParams.get("page")) || 1;

  const { response: products, loading } = useFetcher<Product[]>(getProducts);
  const [filterProductsBySearch, setFilterProductsBySearch] = useState<
    Product[]
  >([]);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  const [openModalFilters, setOpenModalFilters] = useState<boolean>(false);
  const { isDesktop } = useScreenWidth();

  const [paginator, setPaginator] = useState({
    currentPage: page,
    productsPerPage: 12,
  });
  const { updateQuery } = useQueryParams();

  const listProduct = filterProducts.slice(
    (paginator.currentPage - 1) * paginator.productsPerPage,
    paginator.currentPage * paginator.productsPerPage,
  );

  const totalPages = Math.ceil(
    filterProducts.length / paginator.productsPerPage,
  );

  useEffect(() => {
    updateQuery("page", paginator.currentPage);
  }, [paginator.currentPage, updateQuery]);

  useEffect(() => {
    setPaginator((prev) => ({
      ...prev,
      currentPage: page > totalPages ? 1 : page,
    }));
  }, [page, totalPages]);

  function handlePage(page: number) {
    if (page >= 1 && page <= totalPages) {
      setPaginator((prev) => ({
        ...prev,
        currentPage: page,
      }));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

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
    if (!loading && products && products.data.length > 0) {
      const filterBySearch = products.data.filter((product) =>
        simplifyText(product.name).includes(simplifyText(search)),
      );

      setFilterProductsBySearch(filterBySearch);
    }
  }, [loading, products, search]);

  if (loading) {
    return <Loading />;
  }

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
          <div>
            <p className="text-text-light font-medium lg:font-semibold text-xs lg:text-xl ">
              Você pesquisou por &quot;{search}&quot;
            </p>
            <small className="text-text-light font-medium text-xs lg:text-sm">
              {filterProducts.length === 1 ? (
                <>{filterProducts.length} produto encontrado</>
              ) : (
                <>{filterProducts.length} produtos encontrados</>
              )}
            </small>
          </div>
          <div className="lg:hidden">
            <Button
              onClick={() => setOpenModalFilters(true)}
              style="outline"
              height={28}
            >
              <div className="flex items-center gap-1 p-1">
                <Icon icon="lucide:list-filter" className="w-4 h-4" />
                <span className="text-xs">Filtros</span>
              </div>
            </Button>
          </div>
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

          <section className="w-full">
            {filterProducts.length > 0 ? (
              <>
                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                  {listProduct.map((product, index) => (
                    <ProductCard product={product} key={index} />
                  ))}
                </div>
                {filterProducts.length > paginator.productsPerPage && (
                  <div className="border-t border-background-softLight w-full flex justify-center items-center pt-6 gap-2 mt-16">
                    <button
                      onClick={() => handlePage(paginator.currentPage - 1)}
                      className={`${paginator.currentPage === 1 && "text-background-softLight"}`}
                      disabled={paginator.currentPage === 1}
                    >
                      <Icon className="w-6 h-6" icon="raphael:arrowleft" />
                    </button>
                    <div className="space-x-3">
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => handlePage(index + 1)}
                          className={`rounded-full h-7 w-7 text-sm ${paginator.currentPage === index + 1 ? "bg-brand-secondary text-white" : ""}`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => handlePage(paginator.currentPage + 1)}
                      className={`${paginator.currentPage === totalPages && "text-background-softLight"}`}
                      disabled={paginator.currentPage === totalPages}
                    >
                      <Icon className="w-6 h-6" icon="raphael:arrowright" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <p className="font-semibold text-lg">
                Não foi possível encontrar nenhum produto.
              </p>
            )}
          </section>
        </div>
      </Container>
    </main>
  );
}

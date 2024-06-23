import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import Checkbox from "../../components/Checkbox";
import { Icon } from "@iconify/react/dist/iconify.js";
import useQueryParams from "../../hooks/useQueryParams";
import { Product } from "@/types/product";
import InputMoney from "./InputMoney";

interface FiltersProps {
  filteredProductsBySearch: Product[];
  setFilterProducts: Dispatch<SetStateAction<Product[]>>;
  setOpenModalFilters: Dispatch<SetStateAction<boolean>>;
}

export default function Filters({
  filteredProductsBySearch,
  setFilterProducts,
  setOpenModalFilters,
}: FiltersProps) {
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );

  const { addQuery, deleteByKey, deleteByValue, updateQuery, updateUrl } =
    useQueryParams();

  const [brands, setBrands] = useState<string[]>([]);

  const [errorPriceMessage, setErrorPriceMessage] = useState<string>("");
  const [inputPriceOne, setInputPriceOne] = useState<string>("");
  const [inputPriceTwo, setInputPriceTwo] = useState<string>("");

  useEffect(() => {
    const allBrands = filteredProductsBySearch.map(
      (product) => product.informations.brand,
    );

    const noRepeatingBrands = [...new Set(allBrands)];
    setBrands(noRepeatingBrands);
  }, [filteredProductsBySearch]);

  useEffect(() => {
    const onlyPromotions = params.get("onlyPromotions") === "true";
    const filterBrands = params.getAll("brand");

    const priceOne = transformCurrencyIntoNumber(params.get("priceOne") || "");
    const priceTwo = transformCurrencyIntoNumber(params.get("priceTwo") || "");

    const minPrice = Math.min(priceOne, priceTwo);
    const maxPrice = Math.max(priceOne, priceTwo);

    setFilterProducts(() => {
      return filteredProductsBySearch.filter((product) => {
        let result = true;

        if (onlyPromotions) {
          result = result && !!product.promotionalPrice;
        }

        if (filterBrands.length > 0) {
          result = result && filterBrands.includes(product.informations.brand);
        }

        if (
          product.promotionalPrice
            ? product.promotionalPrice < minPrice
            : product.price < minPrice
        ) {
          result = false;
        }

        if (
          product.promotionalPrice
            ? product.promotionalPrice > maxPrice
            : product.price > maxPrice
        ) {
          result = false;
        }

        return result;
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, filteredProductsBySearch, setFilterProducts]);

  useEffect(() => {
    const priceOne = params.get("priceOne");
    const priceTwo = params.get("priceTwo");

    if (priceOne && priceTwo) {
      setInputPriceOne(priceOne);
      setInputPriceTwo(priceTwo);
    }
  }, [params]);

  function clearFilters() {
    const keepSearchParam = `q=${params.get("q")}`;
    updateUrl(new URLSearchParams(keepSearchParam).toString());
    setInputPriceOne("");
    setInputPriceTwo("");
  }

  function updateBrands(evt: React.ChangeEvent<HTMLInputElement>) {
    const selectedBrand = evt.target.name;
    const brands = params.getAll("brand");

    if (brands.includes(selectedBrand)) {
      deleteByValue("brand", selectedBrand);
    } else {
      addQuery("brand", selectedBrand);
    }
  }

  function updatePrice() {
    updateQuery("priceOne", inputPriceOne);
    updateQuery("priceTwo", inputPriceTwo);
  }

  function updatePromotions(evt: React.ChangeEvent<HTMLInputElement>) {
    const checked = evt.target.checked;

    checked
      ? addQuery("onlyPromotions", String(checked))
      : deleteByKey("onlyPromotions");
  }

  function transformCurrencyIntoNumber(valor: string): number {
    let result;
    result = valor.replace("R$ ", "").replace(".", "").replace(",", ".");
    result = parseFloat(result);
    return result;
  }

  return (
    <section className="lg:w-[312px] w-full">
      <div className="flex justify-between mb-5">
        <small className="font-medium text-base">Filtrar por:</small>
        <button
          className="text-text-light font-medium text-sm"
          onClick={clearFilters}
        >
          Limpar filtros
        </button>
      </div>
      <div className="w-full border border-background-softLight rounded-lg overflow-hidden">
        <div className="w-full bg-background-softLight h-10 px-4 py-2">
          <strong className="font-medium">Marcas</strong>
        </div>
        <div className="p-6 flex flex-col gap-3">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2">
              <Checkbox
                checked={searchParams.getAll("brand").includes(brand)}
                onChange={updateBrands}
                name={brand}
              />
              <p className="text-sm">{brand}</p>
            </label>
          ))}
        </div>
      </div>
      <div className="w-full border border-background-softLight rounded-lg mt-6 overflow-hidden">
        <div className="bg-background-softLight h-10 px-4 py-2">
          <strong className="font-medium">Preços</strong>
        </div>
        <div className="p-6 flex flex-col">
          <div>
            <div className="flex items-center">
              <InputMoney
                inputValue={inputPriceOne}
                setInputValue={setInputPriceOne}
                setErrorPriceMessage={setErrorPriceMessage}
              />
              <p className="mx-2">até</p>
              <InputMoney
                inputValue={inputPriceTwo}
                setInputValue={setInputPriceTwo}
                setErrorPriceMessage={setErrorPriceMessage}
              />
              <button
                className="bg-brand-secondary text-white min-w-8 min-h-8 rounded-lg flex items-center justify-center ml-3 disabled:bg-background-softLight disabled:cursor-not-allowed disabled:text-text-light"
                disabled={
                  inputPriceOne && inputPriceTwo && !errorPriceMessage
                    ? false
                    : true
                }
                onClick={updatePrice}
              >
                <Icon icon="bi:check" className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-notify-error mt-2">
              {errorPriceMessage}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Checkbox
              onChange={updatePromotions}
              checked={searchParams.get("onlyPromotions") === "true"}
            />
            <label className="text-xs">Somente ofertas</label>
          </div>
        </div>
      </div>
      <button
        className="bg-brand-secondary h-10 rounded-md text-white font-medium text-sm w-full mt-6 lg:hidden disabled:bg-background-softLight disabled:text-text-light"
        onClick={() => setOpenModalFilters(false)}
      >
        Ver resultados
      </button>
    </section>
  );
}

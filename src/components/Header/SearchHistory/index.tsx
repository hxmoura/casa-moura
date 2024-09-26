"use client";

import { useRouter } from "next/navigation";
import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

interface SearchHistoryProps {
  showSearchHistory: boolean;
  searchHistory: string[];
  setSearchHistory: Dispatch<SetStateAction<string[]>>;
  setShowSearchHistory: Dispatch<SetStateAction<boolean>>;
  searchHistoryRef: RefObject<HTMLDivElement>;
  searchInputRef: RefObject<HTMLInputElement>;
}

export default function SearchHistory({
  showSearchHistory,
  searchHistory,
  setSearchHistory,
  setShowSearchHistory,
  searchHistoryRef,
  searchInputRef,
}: SearchHistoryProps) {
  const router = useRouter();

  useEffect(() => {
    function handleClickElement(evt: MouseEvent) {
      if (
        searchInputRef.current &&
        searchHistoryRef.current &&
        !searchInputRef.current.contains(evt.target as Node) &&
        !searchHistoryRef.current.contains(evt.target as Node)
      ) {
        setShowSearchHistory(false);
      }
    }

    document.addEventListener("mousedown", handleClickElement);
    return () => document.removeEventListener("mousedown", handleClickElement);
  }, [searchInputRef, searchHistoryRef, setShowSearchHistory]);

  useEffect(() => {
    const getSearchHistory = localStorage.getItem("searchHistory");

    if (getSearchHistory && Array.isArray(JSON.parse(getSearchHistory))) {
      setSearchHistory(JSON.parse(getSearchHistory).slice(-5));
    }
  }, [setSearchHistory]);

  function handleHistory(evt: React.MouseEvent, search: string) {
    evt.preventDefault();
    router.push(`/search?q=${search}`);
    setShowSearchHistory(false);
  }

  function clearSearchHistory() {
    localStorage.removeItem("searchHistory");
    setSearchHistory([]);
  }

  return (
    <>
      {showSearchHistory && searchHistory.length > 0 && (
        <div
          ref={searchHistoryRef}
          className="bg-white p-4 rounded absolute top-full mt-1 w-full border border-background-softLight z-50"
        >
          <div className="flex items-center justify-between mb-4">
            <strong className="font-medium text-sm">Buscas recentes</strong>
            <button
              className="text-text-light text-xs"
              onClick={clearSearchHistory}
            >
              Limpar tudo
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {searchHistory
              .slice(-5)
              .reverse()
              .map((search, index) => (
                <button
                  key={index}
                  className="text-sm hover:bg-background-softLight transition-colors rounded py-2 px-3 text-left"
                  onClick={(evt) => handleHistory(evt, search)}
                >
                  {search}
                </button>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

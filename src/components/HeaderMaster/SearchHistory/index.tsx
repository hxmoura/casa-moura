"use client";

import { useRouter } from "next/navigation";
import {
  Dispatch,
  MouseEvent,
  RefObject,
  SetStateAction,
  useEffect,
} from "react";

interface SearchHistoryProps {
  showSearchHistory: boolean;
  searchHistory: string[];
  searchInputRef: RefObject<HTMLInputElement>;
  setSearchHistory: Dispatch<SetStateAction<string[]>>;
}

export default function SearchHistory({
  showSearchHistory,
  searchHistory,
  searchInputRef,
  setSearchHistory,
}: SearchHistoryProps) {
  const router = useRouter();

  useEffect(() => {
    const getSearchHistory = localStorage.getItem("searchHistory");

    if (getSearchHistory && Array.isArray(JSON.parse(getSearchHistory))) {
      setSearchHistory(JSON.parse(getSearchHistory).slice(-5));
    }
  }, [setSearchHistory]);

  function handleHistory(evt: MouseEvent, search: string) {
    evt.preventDefault();
    router.push(`/search?q=${search}`);
  }

  function clearSearchHistory() {
    localStorage.removeItem("searchHistory");
    setSearchHistory([]);
  }

  return (
    <>
      {showSearchHistory && searchHistory.length > 0 && (
        <div
          className="bg-white p-4 rounded absolute top-full mt-1 w-full border border-background-softLight z-50"
          onClick={() => searchInputRef.current?.focus()}
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

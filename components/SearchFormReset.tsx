"use client";

import Link from "next/link";
import { X } from "lucide-react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) form.reset();
  };
  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-button">
        <X className="w-4 h-4" />
      </Link>
    </button>
  );
};

export default SearchFormReset;

import { useRouter } from "next/navigation";
import { useState } from "react";

export function useSearch() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleClear = () => setKeyword("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim()) {
      router.push(`/search?q=${encodeURIComponent(keyword)}`);
    }
  };

  return { keyword, setKeyword, handleClear, handleSearch };
}

"use client";
import { useRouter } from "next/navigation";
export default function SearchInput() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const search = event.currentTarget.search.value;
    router.push(`/search?q=${search}`);
  };

  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className="w-full flex flex-row gap-2 bg-white p-2 rounded-lg shadow-md"
    >
      <input
        type="text"
        placeholder="Search Students"
        id="search"
        name="search"
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
      />
      <button
        type="submit"
        className="bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </form>
  );
}

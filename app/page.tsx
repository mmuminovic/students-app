import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-sky-500 to-teal-500 justify-center items-center pt-8">
      <div className="max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-teal-700">
          Search
        </h1>
        <SearchInput />
      </div>
    </div>
  );
}

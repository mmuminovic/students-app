import SearchInput from "@/components/SearchInput";
import StudentsList from "@/components/StudentsList";

async function getData({ searchParam }: any) {
  const res = await fetch(
    "http://localhost:3000/api/students?q=" + searchParam + "",
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SearchResults(props: any) {
  const students = await getData({ searchParam: props?.searchParams?.q });

  if (!students) {
    return <div>No students found</div>;
  }

  return (
    <div className="bg-gradient-to-r from-sky-500 to-teal-500 w-full min-h-screen pt-12">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Students</h1>
        <div className="flex mb-4 w-full flex-row">
          <SearchInput />
        </div>
        {students.length > 0 ? (
          <StudentsList students={students} />
        ) : (
          <p>No students found</p>
        )}
      </div>
    </div>
  );
}

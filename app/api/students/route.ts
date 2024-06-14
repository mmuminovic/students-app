import students from "./data.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");

  let filteredStudents: any[] = students;

  if (q) {
    const lowerCaseQuery = q.toLowerCase();
    filteredStudents = students.filter(
      (student) =>
        student.fullName.toLowerCase().includes(lowerCaseQuery) ||
        student.school.toLowerCase().includes(lowerCaseQuery) ||
        student.hobby.toLowerCase().includes(lowerCaseQuery) ||
        student.favColor.toLowerCase().includes(lowerCaseQuery)
    );
  }

  return new Response(JSON.stringify(filteredStudents), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function HEAD(request: Request) {}

export async function POST(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}

export async function PATCH(request: Request) {}

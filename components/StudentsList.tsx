import Image from "next/image";

export default function StudentsList({ students = [] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {students.map((student: any) => (
        <li key={student.id} className="rounded-lg shadow-md overflow-hidden">
          <Image
            src={student.imageUrl}
            alt={student.fullName}
            width={50}
            height={50}
            className="w-full h-48 object-cover"
            unoptimized={true}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{student.fullName}</h3>
            <p className="text-gray-700 mb-2">
              School: {student.school} (Year of Birth: {student.yearOfBirth})
            </p>
            <p className="text-gray-700">
              Hobby: {student.hobby}, Favorite Color: {student.favColor}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

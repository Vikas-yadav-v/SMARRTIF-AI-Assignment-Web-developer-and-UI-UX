import React from "react";
import CourseCard from "../components/CourseCard";

const courses = [
  { id: 1, title: "React Basics", description: "Learn React fundamentals" },
  { id: 2, title: "UI/UX Design", description: "Design modern interfaces" },
  { id: 3, title: "JavaScript Mastery", description: "Become JS expert" },
];

function Courses() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Courses</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  );
}

export default Courses;

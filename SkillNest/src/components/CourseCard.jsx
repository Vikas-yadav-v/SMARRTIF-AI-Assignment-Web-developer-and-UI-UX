import React from "react";
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">{course.description}</p>

      <Link
        to={`/course/${course.id}`}
        className="text-blue-600 font-semibold hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}

export default CourseCard;

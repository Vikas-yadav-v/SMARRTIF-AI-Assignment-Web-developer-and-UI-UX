// import React from "react";
// function Admin() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
//       <p className="text-gray-600">Manage courses here.</p>
//     </div>
//   );
// }

// export default Admin;

import React, { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
  });

  const token = localStorage.getItem("token");

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const addCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/courses",
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setForm({ title: "", description: "", price: "" });
      fetchCourses();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/courses/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchCourses();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Admin Dashboard
        </h2>

        <div className="bg-white shadow-md rounded-xl p-6 mb-10">
          <h3 className="text-xl font-semibold mb-4">Add Course</h3>

          <form onSubmit={addCourse} className="space-y-4">
            <input
              type="text"
              placeholder="Course title"
              value={form.title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="bg-black-600 text-white px-6 py-2 rounded-lg hover:bg-black-700 transition"
            >
              Add Course
            </button>
          </form>
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          All Courses
        </h3>

        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white shadow-md rounded-xl p-5 flex justify-between items-center"
            >
              <div>
                <h4 className="text-lg font-bold">
                  {course.title}
                </h4>
                <p className="text-gray-600">
                  {course.description}
                </p>
                <p className="text-green-600 font-semibold">
                  ₹ {course.price}
                </p>
              </div>

              <button
                onClick={() => deleteCourse(course._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Admin;

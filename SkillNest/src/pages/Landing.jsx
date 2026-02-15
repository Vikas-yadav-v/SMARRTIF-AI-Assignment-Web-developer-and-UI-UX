import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>

      <section className="min-h-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white flex items-center px-10">

        <div className="grid md:grid-cols-2 gap-10 items-center w-full">

          <div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Hero Section <br /> Web Design
            </h1>

            <p className="text-lg mb-8 text-gray-300">
              Drives visitors to take action, tells your story
              and grabs the right audience.
            </p>

            <Link
              to="/courses"
              className="bg-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-700 transition"
            >
              ORDER NOW
            </Link>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="hero"
              className="rounded-xl shadow-xl w-96"
            />
          </div>

        </div>
      </section>

      <section className="py-20 bg-gray-100 px-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold mb-3">Fast Learning</h3>
            <p className="text-gray-600">
              Learn skills quickly with practical real-world lessons.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold mb-3">Expert Mentors</h3>
            <p className="text-gray-600">
              Learn from professionals with industry experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h3 className="text-xl font-bold mb-3">Career Focused</h3>
            <p className="text-gray-600">
              Courses designed to boost your career growth.
            </p>
          </div>

        </div>
      </section>

      <section className="py-20 px-10 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {["React", "UI/UX", "JavaScript"].map((course, i) => (
            <div key={i} className="bg-gray-100 rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">{course} Course</h3>
              <p className="text-gray-600 mb-4">
                Professional training with hands-on projects.
              </p>
              <Link
                to="/courses"
                className="text-blue-600 font-semibold hover:underline"
              >
                View Course
              </Link>
            </div>
          ))}

        </div>
      </section>

      <section className="py-20 bg-purple-900 text-white text-center px-10">
        <h2 className="text-4xl font-bold mb-4">
          Ready to upgrade your skills?
        </h2>

        <p className="mb-8 text-gray-300">
          Join thousands of learners and start today.
        </p>

        <Link
          to="/auth"
          className="bg-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-700 transition"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
}

export default Landing;

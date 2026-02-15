import { useParams } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h2 className="text-3xl font-bold mb-4">Course Detail</h2>
      <p className="text-lg">Course ID: {id}</p>
      <p className="text-gray-600 mt-2">More details coming soon...</p>
    </div>
  );
}

export default CourseDetail;

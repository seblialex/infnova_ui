const courses = [
  {
    title: "Full Stack Web Development Bootcamp",
    instructor: "Liben Tadesse",
    category: "Web Development",
    image: "/images/web-dev.jpg",
    duration: "12 weeks",
    students: "1.4k",
    rating: 4.9,
    level: "Beginner",
  },
  {
    title: "Practical Machine Learning",
    instructor: "Benedict Tadesse",
    category: "Data Science",
    image: "/images/ml.jpg",
    duration: "10 weeks",
    students: "1.7k",
    rating: 4.8,
    level: "Intermediate",
  },
  {
    title: "UI/UX Design for Modern Products",
    instructor: "Hana Alemayehu",
    category: "Design",
    image: "/images/uiux.jpg",
    duration: "8 weeks",
    students: "1.1k",
    rating: 4.7,
    level: "Beginner",
  },
  // add the rest of your courses here
];

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-shadow duration-200">
      <img
        src={course.image}
        alt={course.title}
        className="h-44 w-full object-cover"
      />
      <div className="p-4">
        <div className="text-xs text-gray-400 uppercase mb-1">
          {course.category}
        </div>
        <h2 className="font-semibold text-lg mb-1">{course.title}</h2>
        <p className="text-sm text-gray-500">Instructor: {course.instructor}</p>
        <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
          <span>{course.duration}</span>
          <span>⭐ {course.rating}</span>
        </div>
        <div className="mt-2">
          <span className="text-xs bg-gray-200 px-2 py-1 rounded">
            {course.level}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CourseGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      {/* Search bar */}
      <div className="flex flex-col md:flex-row md:space-x-4 mb-8">
        <input
          type="text"
          placeholder="Search courses, instructors..."
          className="flex-1 px-4 py-2 border rounded mb-2 md:mb-0"
        />
        <input
          type="text"
          placeholder="Category"
          className="px-4 py-2 border rounded mb-2 md:mb-0"
        />
        <input
          type="text"
          placeholder="Level"
          className="px-4 py-2 border rounded"
        />
      </div>

      {/* Courses grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
    </section>
  );
}

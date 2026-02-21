import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CourseDetail() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="md:w-2/3">
            <div className="text-xs uppercase text-gray-200 mb-2">
              Cloud Computing
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
              Cloud Engineering with AWS
            </h1>
            <p className="text-sm sm:text-base mb-2">
              Learn how modern companies deploy and scale applications in the
              cloud. Build resilient infrastructure, automate deployments, and
              understand cost-efficient architecture.
            </p>
            <p className="text-gray-200 text-sm">
              Instructor: Samuel Getachew | 8 weeks | 2,000 enrolled | ⭐ 4.9
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 md:w-1/3 flex justify-center">
            <img
              src="/images/aws-course.jpg"
              alt="Course"
              className="h-40 sm:h-48 md:h-52 w-full object-cover rounded"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          {/* What You'll Learn */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-xl mb-4">What You will Learn</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>GWS</li>
              <li>Docker</li>
              <li>CI/CD</li>
              <li>Infrastructure</li>
              <li>System Design</li>
            </ul>
          </div>

          {/* Course Description */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-xl mb-4">Course Description</h2>
            <p className="text-gray-700">
              Learn how modern companies deploy and scale applications in the
              cloud. Build resilient infrastructure, automate deployments, and
              understand cost-efficient architecture. This comprehensive course
              is designed to provide you with practical, hands-on experience and
              real-world skills.
            </p>
          </div>

          {/* Instructor */}
          <div className="bg-white p-6 rounded-xl shadow flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <img
              src="/images/instructor.jpg"
              alt="Instructor"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-lg">Samuel Getachew</h3>
              <p className="text-gray-700 text-sm mt-1">
                Expert Cloud Computing professional with over 10 years of
                industry experience. Passionate about teaching and helping
                students achieve their career goals.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column — Enroll Card */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <p className="text-gray-500 text-sm">
              Join 2,076 students already enrolled
            </p>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition-colors duration-200">
              Enroll Now
            </button>
            <button className="w-full border border-gray-300 py-2 rounded font-medium hover:bg-gray-50 transition-colors duration-200">
              Add to Wishlist
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold mb-2">This course includes:</h4>
            <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
              <li>3 hours of content</li>
              <li>Lifetime access</li>
              <li>Certificate of completion</li>
              <li>Access on mobile and desktop</li>
              <li>Downloadable resources</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

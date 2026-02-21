import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">INFNOVA</div>

        <div className="space-x-6 hidden md:flex">
          <Link
            href="/courses"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Courses
          </Link>
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
            Contact
          </a>
        </div>

        <div className="space-x-4">
          <button className="text-gray-600 font-medium">Sign In</button>

          <Link href="course">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-medium">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

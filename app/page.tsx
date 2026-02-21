import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CourseGrid from "../components/CourseGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <CourseGrid />
      <Footer />
    </div>
  );
}

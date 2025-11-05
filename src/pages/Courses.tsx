import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CoursesHero from "@/components/courses/CoursesHero";
import NursingPrograms from "@/components/courses/NursingPrograms";
import ParamedicalPrograms from "@/components/courses/ParamedicalPrograms";
import AlliedHealthPrograms from "@/components/courses/AlliedHealthPrograms";

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <CoursesHero />
        <NursingPrograms />
        <ParamedicalPrograms />
        <AlliedHealthPrograms />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;

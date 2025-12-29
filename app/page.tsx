import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Say from "./components/Say";
import Admission from "./components/Admission";
import Academics from "./components/Academics";
import StudentLifeSection from "./components/StudentsLife";
import StudentsLife from "./components/StudentsLife";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero/>
   <Say/>
   <Admission/>
   <Academics/>
   <StudentsLife/>
   <Testimonials/>
   <Contact/>
   <Footer />
   </>
  );
}

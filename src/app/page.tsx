
import { Footer, HeroSection, StudentsSection,  TeacherSection, ValuesSection } from "../components";




export default function Home() {
  return (
    <main className="py-4">
      <HeroSection />
      <ValuesSection />
      <TeacherSection />
      <StudentsSection />
      <Footer />
    </main>
  );
}

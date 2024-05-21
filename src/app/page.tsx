
import { HeroSection, StudentsSection,  TeacherSection, ValuesSection } from "../components";




export default function Home() {
  return (
    <main className="border border-red-700">
      <HeroSection />
      <ValuesSection />
      <TeacherSection />
      <StudentsSection />
      
      
    </main>
  );
}

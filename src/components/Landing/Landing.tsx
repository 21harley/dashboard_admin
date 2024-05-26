import React from 'react'
import { HeroSection } from '../HeroSection'
import { ValuesSection } from '../ValuesSection'
import { TeacherSection } from '../TeacherSection'
import { StudentsSection } from '../StudentsSection'
import { Footer } from '../Footer'

const Landing:React.FC = () => {
  return (
    <main className="py-4">
      <HeroSection />
      <ValuesSection />
      <TeacherSection />
      <StudentsSection />
      <Footer />
      </main>
  )
}

export default Landing

import { useEffect } from 'react'
import PageWrapper from '../components/PageWrapper'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import CoursesSection from '../components/CoursesSection'
import FacilitiesSection from '../components/FacilitiesSection'
import IQACSection from '../components/IQACSection'
import AchievementsSection from '../components/AchievementsSection'
import GallerySection from '../components/GallerySection'
import TestimonialsSection from '../components/TestimonialsSection'
import NoticeBoardSection from '../components/NoticeBoardSection'
import ContactSection from '../components/ContactSection'

export default function Home({ darkMode }) {
  useEffect(() => {
    document.title = 'Swami Vivekanand College, MIDC, Latur | Home'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Swami Vivekanand College, MIDC, Latur - Empowering Students Through Quality Education & Innovation.')
  }, [])

  return (
    <PageWrapper>
      <HeroSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <CoursesSection darkMode={darkMode} />
      <FacilitiesSection darkMode={darkMode} />
      <IQACSection darkMode={darkMode} />
      <AchievementsSection darkMode={darkMode} />
      <GallerySection darkMode={darkMode} />
      <TestimonialsSection darkMode={darkMode} />
      <NoticeBoardSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
    </PageWrapper>
  )
}

import HeaderNew from "@/components/header-new"
import HeroNew from "@/components/hero-new"
import TrustStrip from "@/components/trust-strip"
import AboutNew from "@/components/about-new"
import ServicesNew from "@/components/services-new"
import ProjectsNew from "@/components/projects-new"
import ContactBar from "@/components/contact-bar"
import FooterNew from "@/components/footer-new"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNew />
      <HeroNew />
      <TrustStrip />
      <AboutNew />
      <ServicesNew />
      <ProjectsNew />
      <ContactBar />
      <FooterNew />
    </div>
  )
}
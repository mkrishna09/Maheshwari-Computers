import Navbar from "@/components/global/Navbar";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import TrustBar from "@/components/home/TrustBar";
import ContactCTA from "@/components/home/ContactCTA";
import Brands from "@/components/home/Brands";
import Stats from "@/components/home/Stats";
import AboutPreview from "@/components/home/AboutPreview";

export default function Home() {
  return (
    <>
      
      <Hero />
      <TrustBar/>
      <ServicesPreview />
      <Brands/>
      <Stats/>
      <AboutPreview/>
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA/>
  
    </>
  );
}
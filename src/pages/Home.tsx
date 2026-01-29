import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Integrations from "../components/sections/Integrations";
import Testimonial from "../components/sections/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Integrations />
      <Testimonial />
      <Footer />
    </>
  );
}

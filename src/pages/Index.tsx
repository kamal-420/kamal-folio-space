import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Workshops } from "@/components/Workshops";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { SectionWrapper } from "@/components/SectionWrapper";
import { BackToTop } from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <SectionWrapper delay={0.1}>
        <Education />
      </SectionWrapper>
      <SectionWrapper delay={0.1}>
        <Skills />
      </SectionWrapper>
      <SectionWrapper delay={0.1}>
        <Projects />
      </SectionWrapper>
      <SectionWrapper delay={0.1}>
        <Workshops />
      </SectionWrapper>
      <SectionWrapper delay={0.1}>
        <Contact />
      </SectionWrapper>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;

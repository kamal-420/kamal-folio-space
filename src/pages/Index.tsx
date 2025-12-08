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
      <SectionWrapper direction="up">
        <About />
      </SectionWrapper>
      <SectionWrapper delay={0.1} direction="left">
        <Education />
      </SectionWrapper>
      <SectionWrapper delay={0.1} direction="right">
        <Skills />
      </SectionWrapper>
      <SectionWrapper delay={0.1} direction="up">
        <Projects />
      </SectionWrapper>
      <SectionWrapper delay={0.1} direction="left">
        <Workshops />
      </SectionWrapper>
      <SectionWrapper delay={0.1} direction="right">
        <Contact />
      </SectionWrapper>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;

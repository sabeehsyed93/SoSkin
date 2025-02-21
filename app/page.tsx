import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';

export default function Home() {
  return (
    <main className="pt-[72px]">
      <HeroSection />
      <AboutSection />
      <ReviewsSection />
    </main>
  );
}

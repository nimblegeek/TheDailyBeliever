import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { AppShowcase } from "../components/AppShowcase";
import { MeditationGrid } from "../components/MeditationGrid";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4">
        <Hero />
        <AppShowcase />
        <MeditationGrid />
      </main>
    </div>
  );
}

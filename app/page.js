import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Destinations from '@/components/Destinations';
import Treking from '@/components/Trekking'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Destinations />
      <Treking />
    </main>
  );
}
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Destinations from '@/components/Destinations';
import Trekking from '@/components/Trekking';
import Articles from '@/components/Articles';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Destinations />
      <Trekking />
      <Articles />
    </main>
  );
}
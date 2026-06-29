import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Destinations from '@/components/Destinations';
import Trekking from '@/components/Trekking';
import Articles from '@/components/Articles';
import Newsletter from '@/components/Newsletter';
import { getAllDestinations, getAllTrekkingRoutes, getAllArticles } from '@/lib/api';

export default async function Home() {
  let destinations = [];
  let trekkingRoutes = [];
  let articles = [];

  try {
    // Fetch all datasets in parallel for speed
    const [destData, trekData, artData] = await Promise.all([
      getAllDestinations(),
      getAllTrekkingRoutes(),
      getAllArticles(),
    ]);

    destinations = destData || [];
    trekkingRoutes = trekData || [];
    articles = artData || [];
  } catch (error) {
    console.error('Error fetching data from WordPress API:', error.message);
    // Silent fallback: components will use their mockData arrays if these are empty
  }

  return (
    <main>
      <Hero />
      <StatsBar />
      <Destinations destinations={destinations} />
      <Trekking routes={trekkingRoutes} />
      <Articles articles={articles} />
      <Newsletter />
    </main>
  );
}
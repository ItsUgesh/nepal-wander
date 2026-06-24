import { getAllDestinations } from "@/lib/api";

export default async function Home() {
  const destinations = await getAllDestinations();
  console.log(destinations);

  return (
    <main>
      <h1>NepalWander</h1>
      <pre>{JSON.stringify(destinations, null, 2)}</pre>
    </main>
  );
}
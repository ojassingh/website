import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Work from "@/components/work";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen overflow-x-hidden bg-stone-950 sm:max-w-6xl">
      <Hero />
      <Work />
      <Footer />
    </main>
  );
}

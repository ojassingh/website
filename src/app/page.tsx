import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Work from "@/components/work";

export default function Home() {
  return (
    <main className="mx-auto overflow-x-hidden sm:max-w-6xl">
      <Hero />
      <Work />
      <Footer/>
    </main>
  );
}

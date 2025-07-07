import Hero from "@/components/hero";
import Work from "@/components/work";

export default function Home() {
  return (
    <main className="relative mx-auto border sm:max-w-7xl">
      <video
        src="/gradient.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="absolute inset-0 -z-10 mx-auto h-screen w-full object-cover opacity-40 sm:max-w-7xl"
      ></video>
      <div>
        <Hero />
        <Work />
      </div>
    </main>
  );
}

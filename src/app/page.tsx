import Hero from "@/components/hero";
import Projects from "@/components/projects";
// import grain from "@/../public/grain.jpg";

export default function Home() {
  return (
    <main className="relative mx-auto border sm:max-w-7xl">
      {/* <div
        className="absolute inset-0 -z-20 opacity-5"
        style={{
          backgroundImage: `url(${grain.src})`,
        }}
      ></div> */}
      <video
        src="/gradient.mp4"
        loop
        autoPlay
        muted
        className="fixed inset-0 -z-10 mx-auto h-screen w-full object-cover opacity-40 sm:max-w-7xl"
      ></video>
      <div>
        <Hero />
        <Projects />
      </div>
    </main>
  );
}

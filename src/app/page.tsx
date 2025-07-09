import Hero from "@/components/hero";
// import Work from "@/components/work";

export default function Home() {
  return (
    <main className="relative mx-auto sm:max-w-7xl bg-black  border-x-[1px] border-dashed border-neutral-600">
      <div className="">
      <Hero />
      {/* <Work /> */}
      </div>
    </main>
  );
}

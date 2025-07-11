import Hero from "@/components/hero";
import Work from "@/components/work";
// import Footer from "@/components/footer";
import { FooterGradient } from "@/components/ui/footer-gradient";

export default function Home() {
  return (
    <main className="mx-auto sm:max-w-7xl border-x-[1px] border-dashed border-neutral-600">
      <div className="">
      <Hero />
      <Work />
      {/* <Footer /> */}
      <FooterGradient />
      </div>
    </main>
  );
}

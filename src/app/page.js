import About from "@/components/home/About";
import Bio from "@/components/home/Bio";
import Channels from "@/components/home/Channels";
import Hero from "@/components/home/Hero";
import Order from "@/components/home/Order";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <Bio></Bio>
      <About></About>
      <Channels></Channels>
      <Order></Order>
    </main>
  );
}

import Hero from "@/components/share/Hero";
import MarquerCompo from "@/components/share/MarquerCompo";
import Review from "@/components/share/Review";
import ToopBooks from "@/components/share/ToopBooks";
import WhyChoice from "@/components/share/WhyChoice";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <MarquerCompo/>
      <ToopBooks/>
      <WhyChoice/>
      <Review/>
    </div>
  );
}

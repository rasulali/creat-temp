"use client";

import Heading from "@/components/heading";
import Card from "@/components/cardPortfolio";
import BackNav from "@/components/backNav";
import Footer from "@/components/footer";

const Objects = () => {
  return (
    <main className="w-screen relative">
      <BackNav />
      <section className="w-full lg:pt-24 pt-12 lg:px-16 sm:px-8 px-4">
        <div className="flex justify-center lg:mb-8 mb-4">
          <Heading
            animate={{ from: -20, to: 0, dir: "y" }}
            variant="h2"
            text={<h1 className="text-creatBlue">Other Facilities</h1>}
          />
        </div>
        <div
          className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto justify-center overflow-hidden lg:p-4"
        >
          <Card
            src="/objects/1/images/hero.jpg"
            name="Quantum"
            link="/portfolio/objects/1"
          />
          <Card
            src="/objects/2/images/hero.jpg"
            name="Stardust"
            link="/portfolio/objects/2"
          />
          <Card
            src="/objects/3/images/hero.jpg"
            name="Baku City Hospital"
            link="/portfolio/objects/3"
          />
          <Card
            src="/objects/4/images/hero.jpg"
            name="Erkemed Ortopedik Medical"
            link="/portfolio/objects/4"
          />
          <Card
            src="/objects/5/images/hero.jpg"
            name="Swiss Dent"
            link="/portfolio/objects/5"
          />
          <Card
            src="/objects/6/images/hero.jpg"
            name="Lincoln"
            link="/portfolio/objects/6"
          />
          <Card
            src="/objects/7/images/hero.jpg"
            name="Astrid"
            link="/portfolio/objects/7"
          />
          <Card
            src="/objects/8/images/hero.jpg"
            name="Gemma"
            link="/portfolio/objects/8"
          />
          <Card
            src="/objects/9/images/hero.jpg"
            name="Aurelia"
            link="/portfolio/objects/9"
          />
          <Card
            src="/objects/10/images/hero.jpg"
            name="Seraphina"
            link="/portfolio/objects/10"
          />
          <Card
            src="/objects/11/images/hero.jpg"
            name="Peregrine"
            link="/portfolio/objects/11"
          />
          <Card
            src="/objects/12/images/hero.jpg"
            name="Leander"
            link="/portfolio/objects/12"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Objects;

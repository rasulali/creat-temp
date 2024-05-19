"use client";

import Heading from "@/components/heading";
import Card from "@/components/cardPortfolio";
import BackNav from "@/components/backNav";
import Footer from "@/components/footer";

const Interiors = () => {
  return (
    <main className="w-screen relative">
      <BackNav />
      <section className="w-full lg:pt-24 pt-12 lg:px-16 sm:px-8 px-4">
        <div className="flex justify-center lg:mb-8 mb-4">
          <Heading
            animate={{ from: -20, to: 0, dir: "y" }}
            variant="h2"
            text={<h1 className="text-creatBlue">Interior Projects</h1>}
          />
        </div>
        <div
          className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto justify-center overflow-hidden lg:p-4"
        >
          <Card
            src="/interiors/1/images/hero.jpg"
            name="Ağ Şəhər Project"
            text="240kv m²"
            link="/portfolio/interiors/1"
          />
          <Card
            src="/interiors/2/images/hero.jpg"
            name="Zest Project"
            link="/portfolio/interiors/2"
          />
          <Card
            src="/interiors/3/images/hero.jpg"
            name="Slate Project"
            link="/portfolio/interiors/3"
          />
          <Card
            src="/interiors/4/images/hero.jpg"
            name="Spark Project"
            link="/portfolio/interiors/4"
          />
          <Card
            src="/interiors/5/images/hero.jpg"
            name="Quill Project"
            link="/portfolio/interiors/5"
          />
          <Card
            src="/interiors/6/images/hero.jpg"
            name="Swift Project"
            link="/portfolio/interiors/6"
          />
          <Card
            src="/interiors/7/images/hero.jpg"
            name="Prism Project"
            link="/portfolio/interiors/7"
          />
          <Card
            src="/interiors/8/images/hero.jpg"
            name="Pivot Project"
            link="/portfolio/interiors/8"
          />
          <Card
            src="/interiors/9/images/hero.jpg"
            name="Wisp Project"
            link="/portfolio/interiors/9"
          />
          <Card
            src="/interiors/10/images/hero.jpg"
            name="Lumo Project"
            link="/portfolio/interiors/10"
          />
          <Card
            src="/interiors/11/images/hero.jpg"
            name="Pinnacle Project"
            link="/portfolio/interiors/11"
          />
          <Card
            src="/interiors/12/images/hero.jpg"
            name="Odyssey Project"
            link="/portfolio/interiors/12"
          />
          <Card
            src="/interiors/13/images/hero.jpg"
            name="Evolve Project"
            link="/portfolio/interiors/13"
          />
          <Card
            src="/interiors/14/images/hero.jpg"
            name="Mirage Project"
            link="/portfolio/interiors/14"
          />
          <Card
            src="/interiors/15/images/hero.jpg"
            name="Sable Project"
            link="/portfolio/interiors/15"
          />
          <Card
            src="/interiors/16/images/hero.jpg"
            name="Helix Project"
            link="/portfolio/interiors/16"
          />
          <Card
            src="/interiors/17/images/hero.jpg"
            name="Peak Project"
            link="/portfolio/interiors/17"
          />
          <Card
            src="/interiors/18/images/hero.jpg"
            name="Gleam Project"
            link="/portfolio/interiors/18"
          />
          <Card
            src="/interiors/19/images/hero.jpg"
            name="Iris Project"
            link="/portfolio/interiors/19"
          />
          <Card
            src="/interiors/20/images/hero.jpg"
            name="Crest Project"
            link="/portfolio/interiors/20"
          />
          <Card
            src="/interiors/21/images/hero.jpg"
            name="Sway Project"
            link="/portfolio/interiors/21"
          />
          <Card
            src="/interiors/22/images/hero.jpg"
            name="Axis Project"
            link="/portfolio/interiors/22"
          />
          <Card
            src="/interiors/23/images/hero.jpg"
            name="Zephyr Project"
            link="/portfolio/interiors/23"
          />
          <Card
            src="/interiors/24/images/hero.jpg"
            name="Nove Project"
            link="/portfolio/interiors/24"
          />
          <Card
            src="/interiors/25/images/hero.jpg"
            name="Dusk Project"
            link="/portfolio/interiors/25"
          />
          <Card
            src="/interiors/26/images/hero.jpg"
            name="Echo Project"
            link="/portfolio/interiors/26"
          />
          <Card
            src="/interiors/27/images/hero.jpg"
            name="Grove Project"
            link="/portfolio/interiors/27"
          />
          <Card
            src="/interiors/28/images/hero.jpg"
            name="Haven Project"
            link="/portfolio/interiors/28"
          />
          <Card
            src="/interiors/29/images/hero.jpg"
            name="Vista Project"
            link="/portfolio/interiors/29"
          />
          <Card
            src="/interiors/30/images/hero.jpg"
            name="Urban Project"
            link="/portfolio/interiors/30"
          />
          <Card
            src="/interiors/31/images/hero.jpg"
            name="Flume Project"
            link="/portfolio/interiors/31"
          />
          <Card
            src="/interiors/32/images/hero.jpg"
            name="Terre Project"
            link="/portfolio/interiors/32"
          />
          <Card
            src="/interiors/33/images/hero.jpg"
            name="Luna Project"
            link="/portfolio/interiors/33"
          />
          <Card
            src="/interiors/34/images/hero.jpg"
            name="Oasis Project"
            link="/portfolio/interiors/34"
          />
          <Card
            src="/interiors/35/images/hero.jpg"
            name="Nest Project"
            link="/portfolio/interiors/35"
          />
          <Card
            src="/interiors/36/images/hero.jpg"
            name="Bliss Project"
            link="/portfolio/interiors/36"
          />
          <Card
            src="/interiors/37/images/hero.jpg"
            name="Aura Project"
            link="/portfolio/interiors/37"
          />
          <Card
            src="/interiors/38/images/hero.jpg"
            name="Forge Project"
            link="/portfolio/interiors/38"
          />
          <Card
            src="/interiors/39/images/hero.jpg"
            name="Serene Project"
            link="/portfolio/interiors/39"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Interiors;

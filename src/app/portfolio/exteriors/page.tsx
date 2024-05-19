"use client";

import Heading from "@/components/heading";
import Card from "@/components/cardPortfolio";
import BackNav from "@/components/backNav";
import Footer from "@/components/footer";

const Exteriors = () => {
  return (
    <main className="w-screen relative">
      <BackNav />
      <section className="w-full lg:pt-24 pt-12 lg:px-16 sm:px-8 px-4">
        <div className="flex justify-center lg:mb-8 mb-4">
          <Heading
            animate={{ from: -20, to: 0, dir: "y" }}
            variant="h2"
            text={<h1 className="text-creatBlue">Exterior Projects</h1>}
          />
        </div>
        <div
          className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto justify-center overflow-hidden lg:p-4"
        >
          <Card
            src="/exteriors/1/images/hero.jpg"
            name="Pinnacle Project"
            link="/portfolio/exteriors/1"
          />
          <Card
            src="/exteriors/2/images/hero.jpg"
            name="Terra Project"
            link="/portfolio/exteriors/2"
          />
          <Card
            src="/exteriors/3/images/hero.jpg"
            name="Zenith Project"
            link="/portfolio/exteriors/3"
          />
          <Card
            src="/exteriors/4/images/hero.jpg"
            name="Nebula Project"
            link="/portfolio/exteriors/4"
          />
          <Card
            src="/exteriors/5/images/hero.jpg"
            name="Skyreach Project"
            link="/portfolio/exteriors/5"
          />
          <Card
            src="/exteriors/6/images/hero.jpg"
            name="Quartz Project"
            link="/portfolio/exteriors/6"
          />
          <Card
            src="/exteriors/7/images/hero.jpg"
            name="Summit Project"
            link="/portfolio/exteriors/7"
          />
          <Card
            src="/exteriors/8/images/hero.jpg"
            name="Harbor Project"
            link="/portfolio/exteriors/8"
          />
          <Card
            src="/exteriors/9/images/hero.jpg"
            name="Aspect Project"
            link="/portfolio/exteriors/9"
          />
          <Card
            src="/exteriors/10/images/hero.jpg"
            name="Mosaic Project"
            link="/portfolio/exteriors/10"
          />
          <Card
            src="/exteriors/11/images/hero.jpg"
            name="Vertex Project"
            link="/portfolio/exteriors/11"
          />
          <Card
            src="/exteriors/12/images/hero.jpg"
            name="Horizon Project"
            link="/portfolio/exteriors/12"
          />
          <Card
            src="/exteriors/13/images/hero.jpg"
            name="Cascade Project"
            link="/portfolio/exteriors/13"
          />
          <Card
            src="/exteriors/14/images/hero.jpg"
            name="Serenity Project"
            link="/portfolio/exteriors/14"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Exteriors;

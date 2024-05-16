"use client";

import Heading from "@/components/heading";
import RightNav from "@/components/rightNav";
import Card from "@/components/cardPortfolio";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/footer";

const Portfolio = () => {
  const [inView, setInView] = useState({
    int: false,
    ext: false,
    rest: false,
    hotel: false,
    obj: false,
    cons: false,
  });

  const intRef = useRef(null);
  const intInView = useInView(intRef, { margin: "-50% 0% -50% 0%" });

  const extRef = useRef(null);
  const extInView = useInView(extRef, { margin: "-50% 0% -50% 0%" });

  const restRef = useRef(null);
  const restInView = useInView(restRef, { margin: "-50% 0% -50% 0%" });

  const hotelRef = useRef(null);
  const hotelInView = useInView(hotelRef, { margin: "-50% 0% -50% 0%" });

  const objRef = useRef(null);
  const objInView = useInView(objRef, { margin: "-50% 0% -50% 0%" });

  const consRef = useRef(null);
  const consInView = useInView(consRef, { margin: "-50% 0% -50% 0%" });

  useEffect(() => {
    setInView({
      int: intInView,
      ext: extInView,
      rest: restInView,
      hotel: hotelInView,
      obj: objInView,
      cons: consInView,
    });
  }, [intInView, extInView, restInView, hotelInView, objInView, consInView]);

  return (
    <main className="w-screen relative">
      <RightNav
        intInView={inView.int}
        extInView={inView.ext}
        restInView={inView.rest}
        hotelInView={inView.hotel}
        objInView={inView.obj}
        consInView={inView.cons}
      />
      <section className="w-full lg:mt-24 mt-12 lg:px-16 sm:px-8 px-4">
        <div className="w-full relative">
          <span className="w-full flex justify-center">
            <Heading
              animate={{ from: -20, to: 0, dir: "y" }}
              variant="h1"
              text={<h1 className="text-creatBlue">Portfolio</h1>}
            />
          </span>

          <div ref={intRef}>
            <div id="interior" className="lg:pb-8 pb-4 lg:pt-6 pt-3">
              <Heading
                animate={{ from: -20, to: 0, dir: "x" }}
                variant="h2"
                text="İnteryer"
              />
            </div>

            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto justify-center overflow-hidden lg:p-4"
            >
              <Card
                src="/interiors/1/images/hero.jpg"
                name="Ağ Şəhər Layihəsi"
                text="240kv m²"
                link="/portfolio/interiors/1"
              />
              <Card
                src="/interiors/2/images/hero.jpg"
                name="Zest Layihəsi"
                link="/portfolio/interiors/2"
              />
              <Card
                src="/interiors/3/images/hero.jpg"
                name="Slate Layihəsi"
                link="/portfolio/interiors/3"
              />
              <Card
                src="/interiors/4/images/hero.jpg"
                name="Spark Layihəsi"
                link="/portfolio/interiors/4"
              />
              <Card
                src="/interiors/5/images/hero.jpg"
                name="Quill Layihəsi"
                link="/portfolio/interiors/5"
              />
              <Card
                src="/interiors/6/images/hero.jpg"
                name="Swift Layihəsi"
                link="/portfolio/interiors/6"
              />
              <Card
                src="/interiors/7/images/hero.jpg"
                name="Prism Layihəsi"
                link="/portfolio/interiors/7"
              />
              <Card
                src="/interiors/8/images/hero.jpg"
                name="Pivot Layihəsi"
                link="/portfolio/interiors/8"
              />
              <Card
                src="/interiors/9/images/hero.jpg"
                name="Wisp Layihəsi"
                link="/portfolio/interiors/9"
              />
              <Card
                src="/interiors/10/images/hero.jpg"
                name="Lumo Layihəsi"
                link="/portfolio/interiors/10"
              />
              <Card
                src="/interiors/11/images/hero.jpg"
                name="Pinnacle Layihəsi"
                link="/portfolio/interiors/11"
              />
              <Card
                src="/interiors/12/images/hero.jpg"
                name="Odyssey Layihəsi"
                link="/portfolio/interiors/12"
              />
              <Card
                src="/interiors/13/images/hero.jpg"
                name="Evolve Layihəsi"
                link="/portfolio/interiors/13"
              />
              <Card
                src="/interiors/14/images/hero.jpg"
                name="Mirage Layihəsi"
                link="/portfolio/interiors/14"
              />
              <Card
                src="/interiors/15/images/hero.jpg"
                name="Sable Layihəsi"
                link="/portfolio/interiors/15"
              />
              <Card
                src="/interiors/16/images/hero.jpg"
                name="Helix Layihəsi"
                link="/portfolio/interiors/16"
              />
              <Card
                src="/interiors/17/images/hero.jpg"
                name="Peak Layihəsi"
                link="/portfolio/interiors/17"
              />
              <Card
                src="/interiors/18/images/hero.jpg"
                name="Gleam Layihəsi"
                link="/portfolio/interiors/18"
              />
              <Card
                src="/interiors/19/images/hero.jpg"
                name="Iris Layihəsi"
                link="/portfolio/interiors/19"
              />
              <Card
                src="/interiors/20/images/hero.jpg"
                name="Crest Layihəsi"
                link="/portfolio/interiors/20"
              />
              <Card
                src="/interiors/21/images/hero.jpg"
                name="Sway Layihəsi"
                link="/portfolio/interiors/21"
              />
              <Card
                src="/interiors/22/images/hero.jpg"
                name="Axis Layihəsi"
                link="/portfolio/interiors/22"
              />
              <Card
                src="/interiors/23/images/hero.jpg"
                name="Zephyr Layihəsi"
                link="/portfolio/interiors/23"
              />
              <Card
                src="/interiors/24/images/hero.jpg"
                name="Nove Layihəsi"
                link="/portfolio/interiors/24"
              />
              <Card
                src="/interiors/25/images/hero.jpg"
                name="Dusk Layihəsi"
                link="/portfolio/interiors/25"
              />
              <Card
                src="/interiors/26/images/hero.jpg"
                name="Echo Layihəsi"
                link="/portfolio/interiors/26"
              />
              <Card
                src="/interiors/27/images/hero.jpg"
                name="Grove Layihəsi"
                link="/portfolio/interiors/27"
              />
              <Card
                src="/interiors/28/images/hero.jpg"
                name="Haven Layihəsi"
                link="/portfolio/interiors/28"
              />
              <Card
                src="/interiors/29/images/hero.jpg"
                name="Vista Layihəsi"
                link="/portfolio/interiors/29"
              />
              <Card
                src="/interiors/30/images/hero.jpg"
                name="Urban Layihəsi"
                link="/portfolio/interiors/30"
              />
              <Card
                src="/interiors/31/images/hero.jpg"
                name="Flume Layihəsi"
                link="/portfolio/interiors/31"
              />
              <Card
                src="/interiors/32/images/hero.jpg"
                name="Terre Layihəsi"
                link="/portfolio/interiors/32"
              />
              <Card
                src="/interiors/33/images/hero.jpg"
                name="Luna Layihəsi"
                link="/portfolio/interiors/33"
              />
              <Card
                src="/interiors/34/images/hero.jpg"
                name="Oasis Layihəsi"
                link="/portfolio/interiors/34"
              />
              <Card
                src="/interiors/35/images/hero.jpg"
                name="Nest Layihəsi"
                link="/portfolio/interiors/35"
              />
              <Card
                src="/interiors/36/images/hero.jpg"
                name="Bliss Layihəsi"
                link="/portfolio/interiors/36"
              />
              <Card
                src="/interiors/37/images/hero.jpg"
                name="Aura Layihəsi"
                link="/portfolio/interiors/37"
              />
              <Card
                src="/interiors/38/images/hero.jpg"
                name="Forge Layihəsi"
                link="/portfolio/interiors/38"
              />
              <Card
                src="/interiors/39/images/hero.jpg"
                name="Serene Layihəsi"
                link="/portfolio/interiors/39"
              />
            </div>
          </div>

          <div ref={extRef}>
            <div id="exterior" className="lg:pb-8 pb-4 lg:pt-24 pt-16">
              <Heading
                animate={{ from: -25, to: 0, dir: "x" }}
                variant="h2"
                text="Eksteryer"
              />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
            >
              <Card
                src="/exteriors/1/images/hero.jpg"
                name="Pinnacle Layihəsi"
                link="/portfolio/exteriors/1"
              />
              <Card
                src="/exteriors/2/images/hero.jpg"
                name="Terra Layihəsi"
                link="/portfolio/exteriors/2"
              />
              <Card
                src="/exteriors/3/images/hero.jpg"
                name="Zenith Layihəsi"
                link="/portfolio/exteriors/3"
              />
              <Card
                src="/exteriors/4/images/hero.jpg"
                name="Nebula Layihəsi"
                link="/portfolio/exteriors/4"
              />
              <Card
                src="/exteriors/5/images/hero.jpg"
                name="Skyreach Layihəsi"
                link="/portfolio/exteriors/5"
              />
              <Card
                src="/exteriors/6/images/hero.jpg"
                name="Quartz Layihəsi"
                link="/portfolio/exteriors/6"
              />
              <Card
                src="/exteriors/7/images/hero.jpg"
                name="Summit Layihəsi"
                link="/portfolio/exteriors/7"
              />
              <Card
                src="/exteriors/8/images/hero.jpg"
                name="Harbor Layihəsi"
                link="/portfolio/exteriors/8"
              />
              <Card
                src="/exteriors/9/images/hero.jpg"
                name="Aspect Layihəsi"
                link="/portfolio/exteriors/9"
              />
              <Card
                src="/exteriors/10/images/hero.jpg"
                name="Mosaic Layihəsi"
                link="/portfolio/exteriors/10"
              />
              <Card
                src="/exteriors/11/images/hero.jpg"
                name="Vertex Layihəsi"
                link="/portfolio/exteriors/11"
              />
              <Card
                src="/exteriors/12/images/hero.jpg"
                name="Horizon Layihəsi"
                link="/portfolio/exteriors/12"
              />
              <Card
                src="/exteriors/13/images/hero.jpg"
                name="Cascade Layihəsi"
                link="/portfolio/exteriors/13"
              />
              <Card
                src="/exteriors/14/images/hero.jpg"
                name="Serenity Layihəsi"
                link="/portfolio/exteriors/14"
              />
            </div>
          </div>

          <div ref={restRef}>
            <div id="restaurants" className="lg:pb-8 pb-4 lg:pt-24 pt-16">
              <Heading
                animate={{ from: -25, to: 0, dir: "x" }}
                variant="h2"
                text="Restoranlar"
              />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
            >
              <Card
                src="/restaurants/1/images/hero.jpg"
                name="Qara Qarayev"
                text="426 m²"
                link="/portfolio/restaurants/1"
              />
              <Card
                src="/restaurants/2/images/hero.jpg"
                name="Chef Mood Baku"
                text="240 m²"
                link="/portfolio/restaurants/2"
              />
              <Card
                src="/restaurants/3/images/hero.jpg"
                name="Antep Lahmacun"
                text="120 m²"
                link="/portfolio/restaurants/3"
              />
              <Card
                src="/restaurants/5/images/hero.jpg"
                name="Ambiance"
                link="/portfolio/restaurants/5"
              />
              <Card
                src="/restaurants/6/images/hero.jpg"
                name="Arion Café"
                text="240 m²"
                link="/portfolio/restaurants/6"
              />
              <Card
                src="/restaurants/7/images/hero.jpg"
                name="Kavun Restoran"
                link="/portfolio/restaurants/7"
              />
              <Card
                src="/restaurants/8/images/hero.jpg"
                name="Ocakbaşı Restoran"
                link="/portfolio/restaurants/8"
              />
              <Card
                src="/restaurants/4/images/hero.jpg"
                name="Damino"
                link="/portfolio/restaurants/4"
              />
              <Card
                src="/restaurants/9/images/hero.jpg"
                name="Epicurean"
                link="/portfolio/restaurants/9"
              />
              <Card
                src="/restaurants/10/images/hero.jpg"
                name="Şanlıurfa Restoran"
                link="/portfolio/restaurants/10"
              />
              <Card
                src="/restaurants/11/images/hero.jpg"
                name="Xurma Restoran"
                text="600 m²"
                link="/portfolio/restaurants/11"
              />
            </div>
          </div>

          <div ref={hotelRef}>
            <div id="hotel" className="lg:pb-8 pb-4 lg:pt-24 pt-16">
              <Heading
                animate={{ from: -25, to: 0, dir: "x" }}
                variant="h2"
                text="Otellər"
              />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
            >
              <Card
                src="/hotels/1/images/hero.jpg"
                name="Knyazlı Otel"
                text="Qəbələ 3000 m²"
                link="/portfolio/hotels/1"
              />
              <Card
                src="/hotels/2/images/hero.jpg"
                name="Qazaxıstan"
                text="Almatı"
                link="/portfolio/hotels/2"
              />
              <Card
                src="/hotels/3/images/hero.jpg"
                name="Moskva Brosko Otel"
                link="/portfolio/hotels/3"
              />
              <Card
                src="/hotels/4/images/hero.jpg"
                name="Moskva Otel"
                text="VIP otaq 200 m²"
                link="/portfolio/hotels/4"
              />
            </div>
          </div>

          <div ref={objRef}>
            <div id="objects" className="lg:pb-8 pb-4 lg:pt-24 pt-16">
              <Heading
                animate={{ from: -25, to: 0, dir: "x" }}
                variant="h2"
                text="İaşə Obyektləri"
              />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
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
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Portfolio;

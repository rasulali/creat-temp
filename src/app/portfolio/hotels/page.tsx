"use client";

import Heading from "@/components/heading";
import Card from "@/components/cardPortfolio";
import BackNav from "@/components/backNav";
import Footer from "@/components/footer";

const Hotels = () => {
  return (
    <main className="w-screen relative">
      <BackNav />
      <section className="w-full lg:pt-24 pt-12 lg:px-16 sm:px-8 px-4">
        <div className="flex justify-center lg:mb-8 mb-4">
          <Heading
            animate={{ from: -20, to: 0, dir: "y" }}
            variant="h2"
            text={<h1 className="text-creatBlue">Hotel Projects</h1>}
          />
        </div>
        <div
          className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto justify-center overflow-hidden lg:p-4"
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
      </section>
      <Footer />
    </main>
  );
};
export default Hotels;

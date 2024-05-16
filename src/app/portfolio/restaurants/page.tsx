"use client";

import Heading from "@/components/heading";
import Card from "@/components/cardPortfolio";
import BackNav from "@/components/backNav";
import Footer from "@/components/footer";

const Restaurants = () => {
  return (
    <main className="w-screen relative">
      <BackNav />
      <section className="w-full lg:pt-24 pt-12 lg:px-16 sm:px-8 px-4">
        <div className="flex justify-center lg:mb-8 mb-4">
          <Heading
            animate={{ from: -20, to: 0, dir: "y" }}
            variant="h2"
            text={<h1 className="text-creatBlue">Restaurant Projects</h1>}
          />
        </div>
        <div
          className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto justify-center overflow-hidden lg:p-4"
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
      </section>
      <Footer />
    </main>
  );
};
export default Restaurants;

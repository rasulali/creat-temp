"use client";
import Footer from "@/components/footer";
import Heading from "@/components/heading";
import LiveDiv from "@/components/liveDiv";
import Navbar from "@/components/navbar";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [scroll, setScroll] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  return (
    <main className="relative">
      <Navbar isVideoVisible={scroll} />
      <div className="lg:w-2/3 lg:px-0 px-4 flex flex-col mx-auto lg:mb-12 mb-4">
        <div className="lg:mt-48 mt-40">
          <Heading
            animate={{ from: -20, to: 0, dir: "y", delay: 0 }}
            variant="h2"
            text={
              <h1 className="text-creatBlue lg:text-center text-wrap">
                Welcome to{" "}
                <span className="text-nowrap">
                  {" "}
                  <span className="text-[#ed145a]">CREAT </span>
                  COMPANY LLC
                </span>
              </h1>
            }
          />
        </div>
        <div className="lg:mt-12 mt-4">
          <LiveDiv animate={{ from: -10, to: 0, dir: "x", delay: 0.1 }}>
            <div className="lg:text-2xl text-lg text-creatBlue font-semibold flex flex-col gap-y-1 list-inside">
              <li className="leading-snug">
                We are not just a Builder and Architect in{" "}
                <span className="bg-creatBlue text-zinc-100 px-2">
                  CREAT COMPANY LLC
                </span>
              </li>
              <li className="leading-snug">
                We are creater of the{" "}
                <span className="underline underline-offset-2">Inspiring,</span>{" "}
                <span className="underline underline-offset-2">
                  Innovative,
                </span>{" "}
                and{" "}
                <span className="underline underline-offset-2">Lasting,</span>{" "}
                spaces
              </li>
              <li className="leading-snug">
                Our passion for excellence and loyalty to our customers is
                evidence of everything we do.
              </li>
            </div>
          </LiveDiv>
        </div>
        <div className="flex w-fit lg:mt-24 mt-12">
          <Heading
            animate={{ from: -20, to: 0, dir: "x", delay: 0.1 }}
            variant="h3"
            text={<h1 className="text-creatBlue font-semibold">Who are we?</h1>}
          />
        </div>
        <div className="lg:w-1/2 lg:mt-12 mt-2">
          <LiveDiv animate={{ from: -10, to: 0, dir: "x", delay: 0.2 }}>
            <p className="lg:text-2xl text-lg text-creatBlue">
              In the year 2019,{" "}
              <span className="font-semibold">CREAT COMPANY LLC</span> brings
              together a team of skilled architects, engineers, and construction
              professionals capable of turning ideas into reality. In our Lands,
              we have successfully implemented various projects with proven
              experience. Each one is a testament to our unwavering commitment
              to quality
            </p>
          </LiveDiv>
        </div>

        <div className="flex w-fit lg:mt-24 mt-12">
          <Heading
            animate={{ from: -20, to: 0, dir: "x", delay: 0.1 }}
            variant="h3"
            text={
              <h1 className="text-creatBlue font-semibold">
                What is our mission?
              </h1>
            }
          />
        </div>
        <div className="lg:w-1/2 lg:mt-12 mt-2">
          <LiveDiv animate={{ from: -10, to: 0, dir: "x", delay: 0.2 }}>
            <p className="lg:text-2xl text-lg text-creatBlue">
              Our mission is to redefine the landscape of construction and
              architecture by offering innovative and visionary solutions that
              stand the test of time. We believe in not only meeting
              expectations but exceeding them. We ensure that each project we
              undertake is a manifestation of artistry, innovation, and
              sustainability
            </p>
          </LiveDiv>
        </div>
        <div className="flex w-fit lg:mt-24 mt-12">
          <Heading
            animate={{ from: -20, to: 0, dir: "x", delay: 0.1 }}
            variant="h3"
            text={
              <h1 className="text-creatBlue font-semibold">
                What differs us from repetition?
              </h1>
            }
          />
        </div>
        <div className="lg:w-1/2 lg:mt-12 mt-2">
          <LiveDiv animate={{ from: -10, to: 0, dir: "x", delay: 0.2 }}>
            <ul className="lg:text-2xl text-creatBlue list-inside flex flex-col lg:gap-y-4 gap-y-2 list-disc">
              <li className="leading-snug">
                <span className="font-bold tracking-wide uppercase mr-2">
                  Expertise:
                </span>
                Our team consists of experienced architects and construction
                specialists who bring rich experience to each project. We are
                equipped to manage the most complex details from concept to
                completion
              </li>
              <li className="leading-snug">
                <span className="font-bold tracking-wide uppercase mr-2">
                  Innovation:
                </span>
                By encompassing the most advanced technology and design trends,
                we apply innovations to each project. We strive not only to be
                functional but also to create aesthetically groundbreaking
                designs
              </li>
              <li className="leading-snug">
                <span className="font-bold tracking-wide uppercase mr-2">
                  Customer-Centric Approach:
                </span>
                Your vision is our priority. We work closely with our clients,
                ensuring seamless integration of their goals and desires into
                the design and construction process
              </li>
            </ul>
          </LiveDiv>
        </div>

        <div className="flex w-fit lg:mt-24 mt-12">
          <Heading
            animate={{ from: -20, to: 0, dir: "x", delay: 0.1 }}
            variant="h3"
            text={<h1 className="text-creatBlue font-semibold">Our Values</h1>}
          />
        </div>
        <div className="lg:w-1/2 lg:mt-12 mt-2">
          <LiveDiv animate={{ from: -10, to: 0, dir: "x", delay: 0.2 }}>
            <ul className="lg:text-2xl text-creatBlue list-inside flex flex-col lg:gap-y-4 gap-y-2">
              <li className="leading-snug">
                <span className="font-bold tracking-wide uppercase mr-2">
                  Honesty:
                </span>
                We conduct our business with the highest standards of honesty
                and transparency
              </li>
              <li className="leading-snug">
                <span className="font-bold tracking-wide uppercase mr-2">
                  Quality:
                </span>
                Excellence is not just a goal; it's our standard. We are
                committed to delivering projects based on quality metrics
              </li>
              <li className="leading-snug">
                <span className="font-bold tracking-wide uppercase mr-2">
                  Sustainability:
                </span>
                Taking into account our impact on the environment, we
                incorporate continuous improvements into our design and
                construction methods
              </li>
            </ul>
          </LiveDiv>
        </div>
        <div className="lg:mt-40 mt-12 lg:mx-auto">
          <Heading
            animate={{ from: -20, to: 0, dir: "y", delay: 0.1 }}
            variant="h2"
            text={
              <h1 className="text-creatBlue text-center">
                Let's{" "}
                <span className="underline underline-offset-2">Create</span>{" "}
                Together
              </h1>
            }
          />
        </div>
        <div className="flex w-full lg:mt-12 mt-4">
          <div className="flex flex-col w-fit">
            <div className="lg:mt-12">
              <LiveDiv animate={{ from: -10, to: 0, dir: "x", delay: 0.2 }}>
                <p className="lg:text-2xl text-lg text-creatBlue">
                  Whether you're envisioning a new architectural marvel or
                  embarking on a construction project that demands precision and
                  expertise,{" "}
                  <span className="font-semibold text-nowrap">
                    CREAT COMPANY LLC
                  </span>{" "}
                  is here for you. Our path is defined by the relationships we
                  build and the structures we create.
                </p>
              </LiveDiv>
            </div>
            <div className="lg:mt-12 mt-4">
              <LiveDiv animate={{ from: -10, to: 0, dir: "x", delay: 0.2 }}>
                <p className="lg:text-2xl text-lg text-creatBlue">
                  Thank you for considering{" "}
                  <span className="font-semibold">CREAT COMPANY LLC</span> as
                  your partner in turning your dreams into reality. We eagerly
                  anticipate the opportunity to work with you.
                </p>
              </LiveDiv>
            </div>
          </div>
          <div className="w-full h-full lg:block hidden">
            <LiveDiv animate={{ from: 10, to: 0, dir: "x", delay: 0.3 }}>
              <div className="w-full flex justify-center">
                <Image
                  width={720}
                  height={0}
                  priority
                  quality={100}
                  className="w-1/2 pointer-events-none"
                  draggable={false}
                  src="/license-creat.png"
                  alt="License"
                />
              </div>
            </LiveDiv>
          </div>
        </div>
        <div className="lg:hidden mt-4">
          <LiveDiv animate={{ from: 10, to: 0, dir: "x", delay: 0.3 }}>
            <div className="w-full flex justify-center">
              <Image
                width={720}
                height={0}
                priority
                quality={100}
                className="w-1/2 pointer-events-none"
                draggable={false}
                src="/license-creat.png"
                alt="License"
              />
            </div>
          </LiveDiv>
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default About;

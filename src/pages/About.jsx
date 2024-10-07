import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
            At ExploreSphere, we believe that travel is more than just a
            destination—it's an experience that broadens horizons, ignites
            curiosity, and creates lifelong memories. Our mission is to help
            adventurers like you discover the world's most breathtaking places
            with ease and comfort. Whether you're seeking a serene beach escape,
            a cultural deep dive, or an off-the-beaten-path adventure,
            ExploreSphere curates personalized travel itineraries to suit your
            unique style and preferences.
          </p>
          <br />
          <p>
            With our expert travel planning, insider tips, and global
            partnerships, we ensure that every trip is hassle-free and
            unforgettable. Embark on your next adventure with ExploreSphere,
            where your journey begins with endless possibilities.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;

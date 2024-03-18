'use client';
import Banner from "./sections/banner";
import Footer from "./sections/footer";
import Gallery from "./sections/gallery";
import Genders from "./sections/genders";

export default function Home() {
  return (
    <>
      <Banner />
      <Gallery />
      <Genders />
      <Footer />
    </>
  );
}

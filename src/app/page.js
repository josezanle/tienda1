'use client';

import Navbar from "./components/navbar";
import BurgerNavbar from "./components/navbar-burger";
import Banner from "./sections/banner";
import VideoBanner from "./sections/videoBanner";
import Copyrights from "./sections/copyrights";
import Footer from "./sections/footer";
import Gallery from "./sections/gallery";
import Genders from "./sections/genders";

export default function Home() {
  return (
    <>
      <Navbar />
      <BurgerNavbar />
      <Banner />
      <VideoBanner />
      <Gallery />
      <Genders />
      <Footer />
      <Copyrights />
    </>
  );
}

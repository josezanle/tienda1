'use client';

import Navbar from "./components/navbar";
import BurgerNavbar from "./components/navbar-burger";
import Banner from "./sections/banner";
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
      <Gallery />
      <Genders />
      <Footer />
      <Copyrights />
    </>
  );
}

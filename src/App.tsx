import Navbar from "./components/Navber";
import logo from "./assets/logo-text.png";
import banner from "./assets/banner-stack.png"
import image from "./assets/logo-text.png"

import Header from "./components/Header";
import Technologies from "./components/Technologies/Technologies";
import { Suspense } from "react";
import type { Itechnology } from "./types/technologyType";
import Technology from "./components/Technology";
import Footer from "./components/Footer";

const technologiesFetch = async(): Promise<Itechnology[]> =>{
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {
  const technologiesPromies = technologiesFetch();
  return (
    <>
    <Navbar />
    <Header />
    <Suspense fallback={<h2>Loding......</h2>}>
        <Technologies technologiesPromies={technologiesPromies}/>
      </Suspense>
      <Technology />
      <Footer />
    </>
  );
}

export default App;
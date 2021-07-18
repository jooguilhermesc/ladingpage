import NavBar from "../components/NavBar";
import Banner from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/index.css";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <div className="bg-black">
      <header className="w-full">
        <NavBar />
      </header>

      <main className="flex w-full md:flex-column">
        <ContactUs />
        <Banner />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

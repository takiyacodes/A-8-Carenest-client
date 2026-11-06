import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <FeaturesSection />
      {/* <GallerySection /> */}
      {/* <NewsletterSection /> */}
      {/* <Footer /> */}
    </main> 
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiscoverNft from "@/components/DiscoverNft";
import Slider from "@/components/Slider";
import CreateNft from "@/components/CreateNft";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <DiscoverNft />
        <Slider />
        <CreateNft />
      </main>
      <Footer />
    </>
  );
}

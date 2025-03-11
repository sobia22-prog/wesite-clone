import UpperFooter from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import CamperVans from "../components/sections/CamparVans";
import FAQSection from "../components/sections/FAQItem";
import HeroSection from "../components/sections/HeroSection";
import HeroInventory from "../components/sections/InventoryHero";
import InventoryItems from "../components/sections/InventoryItems";

export default function Inventory() {
  return (
    <div>
      <Navbar hasHero={false} />
      <HeroInventory />
      <InventoryItems />
      <HeroSection />
      <CamperVans />
      <FAQSection />
      <UpperFooter />
    </div>
  );
}

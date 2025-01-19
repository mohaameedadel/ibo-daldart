import DynamicTabs from "./components/DynamicTabs";
import FacilitySection from "./components/Facility";
import ReviewsSection from "./components/Reviews";
import ServicesSection from "./components/Services";
import Slider from "./components/Slider";
import WellnessCorner from "./components/WellnessCorner";
import MapSection from "./components/MapSection";
export default function Home() {
  return (
        <div >
          <Slider/>
          <DynamicTabs/>
          <FacilitySection/>
          <ServicesSection/>
          <WellnessCorner/>
          <ReviewsSection/>
          <MapSection/>

        </div>
  );
}

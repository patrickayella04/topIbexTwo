import "./App.scss";
import MobNav from "./components/navigation/organisms/MabNav";
import SectionFive from "./components/sectionFive/organisms/SectionFive";
import SectionFour from "./components/sectionFour/organisms/SectionFour";
import SectionOne from "./components/sectionOne/organisms/SectionOne";
import SectionSix from "./components/sectionSix/organisms/SectionSix";
import SectionThree from "./components/sectionThree/organisms/SectionThree";
import SectionTwo from "./components/sectionTwo/organisms/SectionTwo";

function App() {
  return (
    <div className="App">
      <MobNav />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}

export default App;

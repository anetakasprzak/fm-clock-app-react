import imgDayMobile from "./assets/mobile/bg-image-daytime.jpg";
import imgNightMobile from "./assets/mobile/bg-image-nighttime.jpg";
import imgDayTablet from "./assets/tablet/bg-image-daytime.jpg";
import imgNightTablet from "./assets/tablet/bg-image-nighttime.jpg";
import imgDayDesktop from "./assets/desktop/bg-image-daytime.jpg";
import imgNightDesktop from "./assets/desktop/bg-image-nighttime.jpg";
import QuotesComponent from "./components/QuotesComponent/QuotesComponent";

function App() {
  // const currentTime = new Date().getHours();
  const currentTime = 12;

  const dayTime = currentTime > 5 && currentTime < 18;

  return (
    <div className="wrapper">
      <div className={`background__container ${dayTime ? "day" : "night"}`}>
        <QuotesComponent />
      </div>
    </div>
  );
}

export default App;
